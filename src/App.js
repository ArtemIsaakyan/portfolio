import React from 'react';
import Switch from '@material-ui/core/Switch';
import { SocialProvider, SocialLink } from '@mui-treasury/components/socialLink';
import { useMoonSocialLinkStyles } from '@mui-treasury/styles/socialLink/moon';
import Check from '@mui/icons-material/CheckCircleOutlined';
import Link from '@mui/icons-material/LinkOutlined';
import './App.scss';
import dataSkills from './info/skills.json';
import dataProjects from './info/projects.json';
import logo from './Assets/logo.gif';
import preview from './Assets/preview.jpg';

function App() {
  const [toggled, setToggled] = React.useState(false);

  if (toggled) {
    document.body.style.background = 'rgb(55, 54, 54)';
    document.body.style.color = '#ffffff';
    document.body.style.transition = '0.2s';
  } else {
    document.body.style.background = '#ffffff';
    document.body.style.color = '#000000';
  }

  function change(id) {
    if (id === 1) {
      document.querySelector('.skills').classList.remove('active');
      document.querySelector('.projects').classList.add('active');
      document.querySelector('.proj-info').classList.remove('hidden');
      document.querySelector('.skills-info').classList.add('hidden');
    } else {
      document.querySelector('.skills').classList.add('active');
      document.querySelector('.projects').classList.remove('active');
      document.querySelector('.skills-info').classList.remove('hidden');
      document.querySelector('.proj-info').classList.add('hidden');
    }
  }

  return (
    <div className="App main__container">
      <header className="main__header">
        <Switch checked={toggled} onChange={(e) => setToggled(e.target.checked)} />
      </header>
      <main className="main__content">
        <img className="main__logo" src={logo} alt="logo" />
        <h1 className="main__title">Company name</h1>
        <p className="main__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Omnis iusto ratione distinctio nihil illo fugit.
        </p>
        <SocialProvider useStyles={useMoonSocialLinkStyles}>
          <SocialLink className="main__link" brand={'FacebookCircle'} href={'/#'} />
          <SocialLink className="main__link" brand={'Whatsapp'} href={'/#'} />
          <SocialLink className="main__link" brand={'Instagram'} href={'/#'} />
        </SocialProvider>
        <div className="main__switch-info">
          <button onClick={() => change(1)} className="main__switcher projects active">
            Projects
          </button>
          <button onClick={() => change(2)} className="main__switcher skills">
            Skills
          </button>
        </div>
        <div className="main__info">
          <div className="main__projects proj-info">
            {dataProjects.map((val) => (
              <div key={val.id} className="main__project">
                <img className="main__project-image" src={preview} alt="preview" />
                <div className="main__mask">
                  <h4 className="main__mask-title">{val.title}</h4>
                  <p className="main__mask-description">{val.description}</p>
                  <a className="main__mask-link" href={val.link}>
                    <Link />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="main__skills skills-info hidden">
            {dataSkills.map((val) => (
              <div key={val.id} className="main__skill">
                <h4 className="main__skill-title">
                  <Check className="main__skill-icon" />
                  {val.technology}
                </h4>
                <span className="main__skill-level">{val.level}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

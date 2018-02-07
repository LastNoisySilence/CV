import Typed from 'typed.js';


const apps = {};
const appNames = ['safari', 'sublime', 'card'];
const links = [
  'https://www.etachki.com/',
  'https://www.etachki.com/classified/ru/',
  'https://www.etachki.com/marketplace/ru/',
  'https://carmarket.com.ua/'
];

const tabs = document.querySelectorAll('.safari-app .tab');
let currentTab = document.querySelectorAll('.safari-app .tab')[0];
const frame = document.getElementById('frame');

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    currentTab.className = currentTab.className.replace(' active', '');
    currentTab = e.target;
    currentTab.className += ' active';
    frame.src = links[Array.prototype.indexOf.call(tabs, currentTab)];
  });
});

const off = () => {
  const activeApp = Object.values(apps).find(app => app.form && app.form.className.indexOf('active') >= 0);
  activeApp.form.className = activeApp.form.className.replace(' active', '');
  activeApp.form.className = activeApp.form.className.replace(' zoomIn', '');
  activeApp.icon.className = activeApp.icon.className.replace(' active', '');
  return activeApp.form.id;
};

appNames.forEach(appName => {
  apps[appName] = {
    form: document.getElementById(`${appName}-app`)
  }

  if (apps[appName]) {
    apps[appName].icon = document.getElementById(appName);
    document.getElementById(appName).addEventListener('click', () => {
      if (off() !== appName) {
        apps[appName].form.className += ' active zoomIn';
        apps[appName].icon.className += ' active';
      }
    });
  }
});

const getSong = () => document.getElementById('song');

const playPause = () => {
  const itunes = document.getElementById('itunes');
  if (!getSong().paused) {
    getSong().pause();
    itunes.className += ' disabled';
  } else {
    getSong().play();
    itunes.className = itunes.className.replace(' disabled', '');
  }
};

document.getElementById('itunes').addEventListener('click', () => {
  playPause();
});

const options = {
  strings: [,`
import { Student } from 'NTUU.KPI/TEF/APEPS/department-of-automation-of-power-processes-and-systems-engineering';


class IhorGrivenko extends Student {
  private biography = {
    name: 'Ihor',
    lastName: 'Grivenko',
    birthday: new Date('09-03-1994', 'DD-MM-YYYY'),
    location: {
      country: 'Ukraine',
      city: 'Kyiv',
      language: {
        native: ['ukrainian', 'russian'],
        intermediate: ['english']
      }
    }
  }

  private contactInfo = {
    skype: 'inerono',
    email: 'inerono@gmail.com',
    phone: '+38 (093) 121 78 97'
  }

  private skills = {
    programmingLanguages: [EcmaScript: ['ES6', 'ES7'], TypeScript], ^100
    frontEnd: {
      JSFrameworks: ['AngularJS 1.X', 'Angular 5'], ^100
      CSSFrameworks: ['Bootstrap', 'UIKit', 'Semantic UI'], ^100
      JSLibs: ['ReactJS', 'JQuery', 'D3JS', 'ChartJS'], ^100
      bundler: ['Webpack'], ^100
    }, ^100
    backEnd: { ^100
      platform: 'NodeJS', ^100
      dataBase: 'MongoDB', ^100
      ORM: 'Mongoose', ^100
      JSFrameworks: ['ExpressJS'], ^100
      JSLibs: ['PassportJS'], ^100
    } ^100
  } ^100

  private experience = [ ^100
    { ^100
      company: 'BytesArea', ^100
      period: { ^100
        from: new Date('05-01-2017', 'DD-MM-YYYY'), ^100
        to: new Date() ^100
      }, ^100
      technologyStack: { ^100
        CMS: ['Django CMS'], ^100
        backend: ['Django'], ^100
        JSFrameworks: ['AngularJS 1.X', 'Angular 5'], ^100
        CSSFrameworks: ['Bootstrap'], ^100
        JSLibs: ['ReactJS', 'JQuery', 'D3JS', 'ChartJS'], ^100
      } ^100
    },
    { ^100
      company: 'GjevassGroup', ^100
      period: { ^100
        from: new Date('01-09-2016', 'DD-MM-YYYY'), ^100
        to: new Date('30-12-2016', 'DD-MM-YYYY'), ^100
      }, ^100
      technologyStack: { ^100
        backend: ['Java Spring'], ^100
        JSFrameworks: ['Angular 2'], ^100
        CSSFrameworks: ['Semantic UI'], ^100
        JSLibs: ['JQuery'], ^100
      } ^100
    } ^100
  ] ^100
} ^100`
],
  typeSpeed: 10,
  startDelay: 1500,
  onTypingPaused() {
    const wrapper = document.getElementById('body');
    scrollTo(wrapper, wrapper.scrollHeight, 600);
  },
  preStringTyped() {
    const songNotification = document.getElementById('apple-music-app');
    songNotification.className += ' active';
    setTimeout(() => {
      songNotification.className = songNotification.className.replace('slideInRight', 'slideOutRight');
    }, 5000);
    getSong().play();
  },
  onComplete() {
    hljs.highlightBlock(document.getElementById('body'));
    setTimeout(() => {
      off();
      apps.card.form.className += ' zoomIn active';
      apps.card.icon.className += ' active';
    }, 2000);
  }
}

const typed = new Typed("#code", options);

const scrollTo = (element, to, duration) => {
  if (duration <= 0) return;
  const difference = to - element.scrollTop;
  const perTick = difference / duration * 10;

  setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
  }, 10);
}
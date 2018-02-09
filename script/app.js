import Typed from 'typed.js';


const forms = document.querySelectorAll('.ui.app');
let currentForm = forms[0];
const currentFormIndex = form => Array.prototype.indexOf.call(forms, form);

const icons = document.querySelectorAll('.ui.icon');
let currentIcon = icons[0];
const currentIconIndex = icon => Array.prototype.indexOf.call(icons, icon);

const tabs = document.querySelectorAll('.safari .tab');
let currentTab = tabs[0];
const currentTabIndex = tab => Array.prototype.indexOf.call(tabs, tab);

const codeWrapper = document.getElementById('codeWrapper');

const frame = document.getElementById('frame');

const song = document.getElementById('song');

const links = [
  'https://www.etachki.com/',
  'https://www.etachki.com/classified/ru/',
  'https://www.etachki.com/marketplace/ru/',
  'https://carmarket.com.ua/'
];

const scrollTo = (element, to, duration) => {
  if (duration <= 0) return;
  const difference = to - element.scrollTop;
  const perTick = difference / duration * 10;

  setTimeout(() => {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
  }, 10);
};

icons.forEach((icon, index) => {
  index !== 3
    ? icon.addEventListener('click', event => {
      currentIcon.className = currentIcon.className.replace(' active', '');
      currentIcon = event.target.parentNode;
      currentIcon.className += ' active';
      currentForm.className = currentForm.className.replace(' active', '');
      currentForm = forms[currentIconIndex(currentIcon)];
      currentForm.className += ' active';
    })
    : icon.addEventListener('click', event => {
      const itunes = event.target.parentNode;
      if (!song.paused) {
        song.pause();
        itunes.className += ' disabled';
      } else {
        song.play();
        forms[3].className += ' active';
        setTimeout(() => forms[3].className = forms[3].className.replace('slideInRight', 'slideOutRight'), 5000);
        itunes.className = itunes.className.replace(' disabled', '');
      }
    })
});


tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    currentTab.className = currentTab.className.replace(' active', '');
    currentTab = e.target;
    currentTab.className += ' active';
    frame.src = links[Array.prototype.indexOf.call(tabs, currentTab)];
  });
});

const typed = new Typed("#code", {
  onTypingPaused() { scrollTo(codeWrapper, codeWrapper.scrollHeight, 600) },
  typeSpeed: 10,
  startDelay: 1500,
  showCursor: false,
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
  ]
});



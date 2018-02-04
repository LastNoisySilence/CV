import Typed from 'typed.js';


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
  onTypingPaused() {
    const wrapper = document.getElementById('body');
    scrollTo(wrapper, wrapper.scrollHeight, 600);
  },
  onComplete() {
    hljs.highlightBlock(document.getElementById('body'));
  }
}

const scrollTo = (element, to, duration) => {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
  }, 10);
}

const typed = new Typed("#code", options);
import _ from 'lodash'
//import './style.css';
function component() {
    const element = document.createElement('div');
  
    //lodsh, in now improved by script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
  
    return element;
  }
  
  document.body.appendChild(component());
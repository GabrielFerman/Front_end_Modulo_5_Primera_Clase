import './styles/style.css';
import javascriptLogo from './assets/javascript.svg';
import viteLogo from '/vite.svg';
import HolaMundo from './components/HolaMundo';

document.querySelector('#app').innerHTML = `
  ${HolaMundo()}
`
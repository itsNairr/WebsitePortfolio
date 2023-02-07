// import  ReactDOM from 'react-dom' (OLD Render Method)
// import App from './App'
// import './index.css'
// //renders the entire thing (imports the entire app)
// ReactDOM.render(<App/>, document.querySelector('#root'))

import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css'
import Particles from 'particlesjs';

window.onload= function() {
  Particles.init
({
    selector: '.background',
    maxParticles: 100,
    connectParticles: false
  });
};
const container = document.querySelector('#root');
const root = createRoot(container); 
root.render(<App/>);
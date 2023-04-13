import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css'
import Particles from 'particlesjs';

window.onload= function() {
  Particles.init
({
    selector: '.background',
    maxParticles: 15,
    color: '#ffffff',
    connectParticles: true,
  });
};
const container = document.querySelector('#root');
const root = createRoot(container); 
root.render(<App/>);
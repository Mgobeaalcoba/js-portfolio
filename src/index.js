import Template from '@templates/Template.js';
import '@styles/main.css';
import '@styles/vars.styl'
console.log('Hola Mundo');
console.log('Chau Mundo');
console.log('Esto es una pruba de compilación en tiempo real');

(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();

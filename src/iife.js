import RaveAlert from './lib/rave-alert';
import './main.scss';

const existingElement = document.getElementById('jhu-rave-alert');
const skipToMainElement = document.querySelector('.jhu-skip-to-main');

new RaveAlert(existingElement, skipToMainElement);

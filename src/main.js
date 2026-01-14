import addAlert from './lib/add-alert';

import './main.scss';

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://local.jhu.edu/wp-json/jhu-public/v1/rave-alert');
xhr.onload = function () {
  if (xhr.status === 200) {
    const response = xhr.responseText;
    try {
      const data = JSON.parse(response);
      if (data && data.alert) {
        addAlert(data.alert);
      }
    } catch (error) {
      console.error(`${error}. Attempted to parse: ${response}`);
    }
  }
};
xhr.send();

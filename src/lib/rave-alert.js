export default class RaveAlert {

  constructor(element = null, skipToMain = null) {
    this.element = element instanceof HTMLElement ? element : null;
    this.skipToMain = skipToMain instanceof HTMLElement ? skipToMain : null;
    this.get();
  }

  get() {

    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://www.jhu.edu/wp-json/jhu-public/v1/rave-alert');
    xhr.onload = () => {

      if (xhr.status === 200) {
        const response = xhr.responseText;
        try {
          const data = JSON.parse(response);
          if (data && data.alert) {
            this.addAlert(data.alert);
          }
        } catch (error) {
          console.error(`${error}. Attempted to parse: ${response}`);
        }
      }
    };
    xhr.send();
  }

  template(data) {

    const alert = document.createElement('section');
    alert.setAttribute('aria-label', data.typeLabel);

    let classes = ['jhu-announcement', 'rave-alert', `type-${data.type}`];
    
    alert.classList.add(...classes);

    let html = '';
    if (data.link) {
      html += `<a href="${data.link}">`;
    }
    html += data.message;
    if (data.link) {
      html += '</a>';
    }

    alert.innerHTML = html;

    return alert;

  }

  addAlert(alert) {

    if (alert === null) {
      // no active alert
      return;
    }

    const renderedAlert = this.template(alert)
    const existingElement = document.getElementById('jhu-rave-alert');

    if (this.element) {
      existingElement.append(renderedAlert);
    } else if (this.skipToMain) {
      this.skipToMain.after(renderedAlert);
    } else {
      // add right after opening body tag
      document.body.insertBefore(renderedAlert, document.body.firstChild);
    }

    document.dispatchEvent(new CustomEvent('rave-alert:added'));

  }
};

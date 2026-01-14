const template = function (data) {

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

};

export default function (alert) {

  if (alert === null) {
    // no active alert
    return;
  }

  const renderedAlert = template(alert)
  const existingElement = document.getElementById('jhu-rave-alert');

  if (existingElement === null) {
    // add right after opening body tag
    document.body.insertBefore(renderedAlert, document.body.firstChild);
  } else {
    // add to existing element
    existingElement.append(renderedAlert);
  }

  document.dispatchEvent(new CustomEvent('rave-alert:added'));

};

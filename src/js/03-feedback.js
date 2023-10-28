import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const KEY_LOCAL_FORM = 'feedback-form-state';

form.addEventListener('input', infoInput);

function infoInput() {
  const formData = {
    name: form.querySelector('[name="email"]').value,
    email: form.querySelector('[name="message"]').value,
  };
  localStorage.setItem(KEY_LOCAL_FORM, JSON.stringify(formData));
}

if (localStorage.getItemtItem(KEY_LOCAL_FORM) !== null) {
  localStorage.setItem(KEY_LOCAL_FORM, JSON.stringify(formData));
}

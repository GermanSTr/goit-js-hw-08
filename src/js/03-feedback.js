import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const KEY_LOCAL_FORM = 'feedback-form-state';
const inputData = {};

initForm();

form.addEventListener('input', throttle(infoInput, 500));

function infoInput() {
  new FormData(form).forEach((value, key) => {
    inputData[key] = value;
  });
  localStorage.setItem(KEY_LOCAL_FORM, JSON.stringify(inputData));
}

function initForm() {
  let persistedData = localStorage.getItem(KEY_LOCAL_FORM);
  if (persistedData) {
    persistedData = JSON.parse(persistedData);
    Object.entries(persistedData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  currentValue = {};
  new FormData(event.currentTarget).forEach((value, key) => {
    currentValue[key] = value;
    event.currentTarget[key].value = '';
  });
  console.log(currentValue);
  localStorage.removeItem(KEY_LOCAL_FORM);
}

import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

initForm();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  try {
    const formData = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };
    const formDataJson = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formDataJson);
  } catch (e) {
    console.error('LocalStorage not supported 1');
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  const saveFormSubmit = localStorage.getItem(STORAGE_KEY);
  console.log('submit:', saveFormSubmit);

  if (saveFormSubmit) {
    localStorage.removeItem(STORAGE_KEY);
  }
  form.reset();
}

function initForm() {
  try {
    const userData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    Object.entries(userData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  } catch (e) {
    console.error('LocalStorage not supported 2');
  }
}

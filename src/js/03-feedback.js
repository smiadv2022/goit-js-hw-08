import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const form =document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(event){
  const formData ={
    email:form.elements.email.value,
    message: form.elements.message.value,
  };
  const formDataJson = JSON.stringify(formData);
  try {
    localStorage.setItem(STORAGE_KEY, formDataJson);
  } catch (e) {
    console.error('LocalStorage not supported');
  }

}
function onFormSubmit(){
  const saveFormSubmit = localStorage.getItem(STORAGE_KEY);
  if(saveFormSubmit){
    console.log(saveFormSubmit);
  }
}
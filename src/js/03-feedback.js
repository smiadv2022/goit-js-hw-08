import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const form =document.querySelector('.feedback-form');
initForm();
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
    console.error('LocalStorage not supported 1');
  }

}
function onFormSubmit(){
  const saveFormSubmit = localStorage.getItem(STORAGE_KEY);
  console.log("submit:", saveFormSubmit);
  // console.log("form:", form.elements);
  if(saveFormSubmit){
    localStorage.removeItem(STORAGE_KEY);
    // console.log("sub-", saveFormSubmit);

  }
}
function initForm (){
let userFilter = localStorage.getItem(STORAGE_KEY);
// console.log("us:", userFilter);
try {
  if (userFilter){
  userFilter=JSON.parse(userFilter);
  Object.entries(userFilter).forEach(([name, value])=>{
form.elements[name].value = value;
// console.log("from-",form.elements[name].value);

  });
}
}

catch (e) {
  console.error('LocalStorage not supported 2');
}

}

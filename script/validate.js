//Error functions
function showError(errorElement, validationMesage, visibleErrorClass) {
  //   inputElement.classList.add('input_type_error');
  errorElement.textContent = validationMesage;
  errorElement.classList.add(visibleErrorClass);
}

function hideError(errorElement, visibleErrorClass) {
  //   inputElement.classList.remove('input_type_error');
  errorElement.classList.remove(visibleErrorClass);
  errorElement.textContent = '';
}
//Validity check function
function isValid(input, errorClassTemplate, visibleErrorClass) {
  const errorElement = document.querySelector(`${errorClassTemplate}${input.name}`);
  console.log(errorElement);
  if (!input.validity.valid) {
    showError(errorElement, input.validationMesage, visibleErrorClass);
  } else {
    hideError(errorElement);
  }
}
//Listerners settings
const setEventListeners = function (formElement, inputList, errorClassTemplate, visibleErrorClass) {
  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });

  inputList.forEach(input => {
    input.addEventListener('input', function (evt) {
      isValid(input, errorClassTemplate, visibleErrorClass);
    });
  });
};

//
function enableValidation(config) {
  const formElement = document.querySelector(config.formSelector);
  const inputList = Array.from(document.querySelectorAll(config.inputSelector));

  setEventListeners(formElement, inputList, config.errorClassTemplate, config.visibleErrorClass);
}

//Config object
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.input',
  errorClassTemplate: '.input-error_type_',
  visibleErrorClass: 'input-error_visible'
});

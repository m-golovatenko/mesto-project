//Config object
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_disabled',
  errorClass: 'popup__input-error_active'
};

//Error functions
function showError(formElement, inputElement, validationMessage, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = validationMessage;
  errorElement.classList.add(config.errorClass);
}

function hideError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(config.errorClass);
}

//Validity check function
function isValid(config, formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideError(formElement, inputElement, config);
  }
}

//Button Change
function hasInvalidInput(inputList) {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
}

function disableButton(config, buttonElement) {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.disabled = true;
}

function enableButton(config, buttonElement) {
  buttonElement.classList.remove(config.inactiveButtonClass);
  buttonElement.disabled = false;
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    disableButton(config, buttonElement);
  } else {
    enableButton(config, buttonElement);
  }
}

//Listerners settings
function setEventListerners(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', function () {
      isValid(config, formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

//Validation
function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(formElement => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListerners(formElement, config);
  });
}

//Reset Validation
function resetErrors(inputList) {
  inputList.forEach(inputElement => {
    hideError(inputElement);
  });

  toggleButtonState();
}

//Reset Validation

enableValidation(config);

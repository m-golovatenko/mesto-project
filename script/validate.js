//Error functions
function showError(errorElement, validationMessage, visibleErrorClass) {
  //   inputElement.classList.add('input_type_error');
  errorElement.textContent = validationMessage;
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
  if (!input.validity.valid) {
    showError(errorElement, input.validationMessage, visibleErrorClass);
  } else {
    hideError(errorElement);
  }
}

//Button Change
function disableButton(saveButton, inactiveButtonClass) {
  saveButton.classList.add(inactiveButtonClass);
  saveButton.disabled = true;
}

function enableButton(saveButton, inactiveButtonClass) {
  saveButton.classList.remove(inactiveButtonClass);
  saveButton.disabled = false;
}

function toggleButtonState(saveButton, inactiveButtonClass) {
  if (true) {
    enableButton(saveButton, inactiveButtonClass);
  } else {
    disableButton(saveButton, inactiveButtonClass);
  }
}

//Listerners settings
const setEventListeners = function (
  formElement,
  inputList,
  errorClassTemplate,
  visibleErrorClass,
  inactiveButtonClass,
  saveButton
) {
  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });

  inputList.forEach(input => {
    input.addEventListener('input', function (evt) {
      isValid(input, errorClassTemplate, visibleErrorClass);
      toggleButtonState(saveButton, inactiveButtonClass);
    });
  });
};

//
function enableValidation(config) {
  const formElement = document.querySelector(config.formSelector);
  const inputList = Array.from(document.querySelectorAll(config.inputSelector));
  const saveButton = formElement.querySelector(config.saveButtonSelector);

  setEventListeners(
    formElement,
    inputList,
    config.errorClassTemplate,
    config.visibleErrorClass,
    saveButton,
    config.inactiveButtonClass
  );
}

//Config object
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.input',
  errorClassTemplate: '.input-error_type_',
  visibleErrorClass: 'input-error',
  saveButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled'
});

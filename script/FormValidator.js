//Config object
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  saveButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_disabled',
  errorClass: 'popup__input-error_active'
};

//Form Validation Constructor
class FormValidator {
  constructor(data, formElement) {
    this._formElement = formElement;
    this._data = data;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._data.inputSelector));
    this._buttonElement = this._formElement.querySelector('.popup__save-button');
  }
  //Error Methods
  _showError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._data.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._data.errorClass);
  }

  _hideError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._data.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._data.errorClass);
  }

  //Validity check method
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideError(inputElement);
    }
  }

  //Button State Change
  _hasInvalidInput() {
    return this._inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  }

  _disableButton() {
    this._buttonElement.classList.add(this._data.inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _enableButton() {
    this._buttonElement.classList.remove(this._data.inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  _toggleButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) {
      this._disableButton(this._data);
    } else {
      this._enableButton(this._data);
    }
  }

  //Listeners settings
  _setEventListeners(inputList) {
    this._toggleButtonState(inputList);
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState(inputList);
      });
    });
  }

  //Validation
  enableValidation() {
    this._setEventListeners(this._inputList);
  }

  //Reset Validation(hiding errors and buton state change)
  resetValidation() {
    this._inputList.forEach(inputElement => {
      this._hideError(inputElement);
    });

    this._toggleButtonState(this._inputList);
  }
}

export { FormValidator, config };

//Previous code
// function showError(formElement, inputElement, validationMessage, config) {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(config.inputErrorClass);
//   errorElement.textContent = validationMessage;
//   errorElement.classList.add(config.errorClass);
// }

// function hideError(formElement, inputElement, config) {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(config.inputErrorClass);
//   errorElement.textContent = '';
//   errorElement.classList.remove(config.errorClass);
// }

// //Validity check function
// function isValid(config, formElement, inputElement) {
//   if (!inputElement.validity.valid) {
//     showError(formElement, inputElement, inputElement.validationMessage, config);
//   } else {
//     hideError(formElement, inputElement, config);
//   }
// }

// //Button Change
// function hasInvalidInput(inputList) {
//   return inputList.some(inputElement => {
//     return !inputElement.validity.valid;
//   });
// }

// function disableButton(config, buttonElement) {
//   buttonElement.classList.add(config.inactiveButtonClass);
//   buttonElement.disabled = true;
// }

// function enableButton(config, buttonElement) {
//   buttonElement.classList.remove(config.inactiveButtonClass);
//   buttonElement.disabled = false;
// }

// function toggleButtonState(inputList, buttonElement) {
//   if (hasInvalidInput(inputList)) {
//     disableButton(config, buttonElement);
//   } else {
//     enableButton(config, buttonElement);
//   }
// }

// //Listeners settings
// function setEventListeners(formElement, config) {
//   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
//   const buttonElement = formElement.querySelector(config.saveButtonSelector);
//   toggleButtonState(inputList, buttonElement, config);
//   inputList.forEach(inputElement => {
//     inputElement.addEventListener('input', function () {
//       isValid(config, formElement, inputElement);
//       toggleButtonState(inputList, buttonElement);
//     });
//   });
// }

// //Validation
// function enableValidation(config) {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));
//   formList.forEach(formElement => {
//     setEventListeners(formElement, config);
//   });
// }

// //Reset Validation
// const resetValidation = (formElement, config) => {
//   const inputs = Array.from(formElement.querySelectorAll(config.inputSelector));
//   const saveButton = formElement.querySelector(config.saveButtonSelector);
//   inputs.forEach(inputElement => {
//     hideError(formElement, inputElement, config);
//   });

//   toggleButtonState(inputs, saveButton, config);
// };

// enableValidation(config);

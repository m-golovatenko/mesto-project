//Form Validation Constructor
export default class FormValidator {
  constructor(data, formElement) {
    this._formElement = formElement;
    this._data = data;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._data.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._data.saveButtonSelector);
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

export { FormValidator };

//Config object
export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  saveButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_disabled',
  errorClass: 'popup__input-error_active'
};

//API
export const apiAuthorization = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: '2a978c46-dbca-4ec1-9e35-2fcdefb9bfb3',
    'Content-Type': 'application/json'
  }
};

//VARIABLE
//Form
export const formEditElement = document.forms['edit'];
export const formAddCardElement = document.forms['add'];
export const formEditAvatarElement = document.forms['avatar'];
//Edit
export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const userNameInput = formEditElement.elements.name;
export const userOccupationInput = formEditElement.elements.occupation;
//Add Card popup
export const buttonAddCard = document.querySelector('.profile__add-button');
//Edit Avatar Popup
export const avatarButton = document.querySelector('.profile__avatar-overlay');

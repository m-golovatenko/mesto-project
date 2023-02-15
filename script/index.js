//ПЕРЕМЕННЫЕ
//Edit button
const editProfileButton = document.querySelector('.profile__edit-button');
//Popup
const popup = document.querySelector('.popup');
//Popup close button
const popupCloseButton = document.querySelector('.popup__close-button');
//Form
const formElement = document.querySelector('.popup__form');
//Name
const userName = document.querySelector('.profile__name');
//Occupation
const userOccupation = document.querySelector('.profile__occupation');
//Name Input
const userNameInput = document.querySelector('.popup__name');
//Occupation Input
const userOccupationInput = document.querySelector('.popup__occupation');

//Openning and closing popup
editProfileButton.addEventListener('click', openPopup);
function openPopup() {
  popup.classList.add('popup_opened');
  userNameInput.value = userName.textContent;
  userOccupationInput.value = userOccupation.textContent;
}

popupCloseButton.addEventListener('click', closePopup);
function closePopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userOccupation.textContent = userOccupationInput.value;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);

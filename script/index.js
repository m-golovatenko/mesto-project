import { cards, config } from './const.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

//VARIABLE
//Popups
const popupList = document.querySelectorAll('.popup');
//Edit popup
const popupEdit = document.querySelector('.popup_edit');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const userName = document.querySelector('.profile__name');
const userNameInput = document.querySelector('.popup__input_type_name');
const userOccupation = document.querySelector('.profile__occupation');
const userOccupationInput = document.querySelector('.popup__input_type_occupation');
//Add Card popup
const popupAddCard = document.querySelector('.popup_add');
const buttonAddCard = document.querySelector('.profile__add-button');
const cardTitleInput = document.querySelector('.popup__input_type_title');
const cardLinkInput = document.querySelector('.popup__input_type_link');
//Scale Image Popup
const popupScalePhoto = document.querySelector('.popup_photo-scale');
const imageScalePhoto = popupScalePhoto.querySelector('.popup__scale-photo');
const subtitleScalePhoto = popupScalePhoto.querySelector('.popup__subtitle');
//Form
const formEditElement = document.forms['edit'];
const formAddCardElement = document.forms['add'];
//GridSection
const photosContainer = document.querySelector('.photos');
//Close Buttons
const popupCloseButtons = document.querySelectorAll('.popup__close-button');

//FUNCTIONS
function renderCard(card) {
  const newCard = new Card(card, '.card__template');
  const cardElement = newCard.createCard();
  return cardElement;
}

//Initial cards creation
cards.forEach(card => {
  photosContainer.append(renderCard(card));
});

//Edit Profile
function openEditPopup() {
  openPopup(popupEdit);
  userNameInput.value = userName.textContent;
  userOccupationInput.value = userOccupation.textContent;
  formEditPopupValidator.resetValidation();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userOccupation.textContent = userOccupationInput.value;
  closePopup(popupEdit);
}

//Add card
function openAddCardPopup() {
  formAddCardElement.reset();
  openPopup(popupAddCard);
  formAddPopupValidator.resetValidation();
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  photosContainer.prepend(renderCard({ name: cardTitleInput.value, link: cardLinkInput.value }));
  closePopup(popupAddCard);
}

//Open and close popups
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeOnEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeOnEscape);
}

//Open Scale Photo
function handleOpenScalePhotoPopup(name, link) {
  openPopup(popupScalePhoto);
  imageScalePhoto.src = link;
  imageScalePhoto.alt = name;
  subtitleScalePhoto.textContent = name;
}

//Close on button
popupCloseButtons.forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', function () {
    closePopup(popup);
  });
});

//Close on esc
function closeOnEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//Close on overlay
popupList.forEach(popup => {
  popup.addEventListener('mousedown', function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
  });
});

//EVENT LISTENERS
buttonEditProfile.addEventListener('click', openEditPopup);
formEditElement.addEventListener('submit', handleProfileFormSubmit);
buttonAddCard.addEventListener('click', openAddCardPopup);
formAddCardElement.addEventListener('submit', handleAddCardFormSubmit);
document.addEventListener('keydown', closeOnEscape);

//VALIDATION
//Form Validation Copy
const formEditPopupValidator = new FormValidator(config, formEditElement);
formEditPopupValidator.enableValidation();

const formAddPopupValidator = new FormValidator(config, formAddCardElement);
formAddPopupValidator.enableValidation();

export { handleOpenScalePhotoPopup };

import 'core-js/actual';
import './index.css';

import {
  cards,
  config,
  formAddCardElement,
  formEditElement,
  cardLinkInput,
  cardTitleInput,
  buttonAddCard,
  buttonEditProfile,
  userNameInput,
  userOccupationInput
} from '../script/const.js';
import FormValidator from '../script/FormValidator.js';
import Card from '../script/Card.js';
import Section from '../script/Section.js';
import UserInfo from '../script/UserInfo.js';
import PopupWithImage from '../script/PopupWithImage.js';
import PopupWithForm from '../script/PopupWithForm.js';

//FUNCTIONS
//ScalePhoto Popup
const popupScalePhoto = new PopupWithImage('.popup_photo-scale');
popupScalePhoto.setEventListeners();

function handleAddCardCardClick(name, link) {
  popupScalePhoto.open(name, link);
}

// Render Card in DOM
function createCard(items) {
  const card = new Card(items, handleAddCardCardClick, '.card__template');
  return card.renderCard();
}

const cardList = new Section(
  {
    items: cards,
    renderer: item => {
      const cardElement = createCard(item);
      cardList.addItem(cardElement);
    }
  },
  '.photos'
);

cardList.renderItems();

//Add Card Popup
function handleFormAddCardSubmit() {
  const cardData = {
    name: cardTitleInput.value,
    link: cardLinkInput.value
  };
  const cardElement = createCard(cardData);
  cardList.addNewItem(cardElement);
}

const popupAddCard = new PopupWithForm('.popup_add', handleFormAddCardSubmit);
popupAddCard.setEventListeners();

function handleAddCardPopupOpen() {
  popupAddCard.open();
  formAddPopupValidator.resetValidation();
}

buttonAddCard.addEventListener('click', handleAddCardPopupOpen);

//Edti Profile Popup
function handleFormEditProfileSubmit() {
  const profileData = {
    name: userNameInput.value,
    occupation: userOccupationInput.value
  };
  userProfile.setUserInfo(profileData);
}

const userProfile = new UserInfo({
  userNameElement: '.profile__name',
  userOccupationElement: '.profile__occupation'
});

const popupEditProfile = new PopupWithForm('.popup_edit', handleFormEditProfileSubmit);
popupEditProfile.setEventListeners();

function handleEditProfilePopupOpen() {
  popupEditProfile.open();
  const { name, occupation } = userProfile.getUserInfo();
  userNameInput.value = name;
  userOccupationInput.value = occupation;
  formEditPopupValidator.resetValidation();
}

buttonEditProfile.addEventListener('click', () => {
  handleEditProfilePopupOpen();
});

//VALIDATION
const formEditPopupValidator = new FormValidator(config, formEditElement);
formEditPopupValidator.enableValidation();

const formAddPopupValidator = new FormValidator(config, formAddCardElement);
formAddPopupValidator.enableValidation();

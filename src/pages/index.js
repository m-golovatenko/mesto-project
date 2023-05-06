import 'core-js/actual';
import './index.css';

import {
  config,
  formAddCardElement,
  formEditElement,
  buttonAddCard,
  buttonEditProfile,
  userNameInput,
  userOccupationInput,
  apiAuthorization,
  formEditAvatarElement,
  avatar
} from '../script/const.js';
import FormValidator from '../script/FormValidator.js';
import Card from '../script/Card.js';
import Section from '../script/Section.js';
import UserInfo from '../script/UserInfo.js';
import PopupWithImage from '../script/PopupWithImage.js';
import PopupWithForm from '../script/PopupWithForm.js';
import Api from '../script/Api';
import PopupWithSubmit from '../script/PopupWithSubmit';

//FUNCTIONS

//API;
const api = new Api(apiAuthorization);

//ScalePhoto Popup
const popupScalePhoto = new PopupWithImage('.popup_photo-scale');
popupScalePhoto.setEventListeners();

function handleCardClick(name, link) {
  popupScalePhoto.open(name, link);
}

//PopupConfirm
const popupSubmit = new PopupWithSubmit('.popup_delete-card');
popupSubmit.setEventListeners();

//UserId
let userId;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    userId = userData._id;
    cardList.renderItems(cardData);
    userProfile.setUserInfo({ name: userData.name, occupation: userData.about });
    userProfile.setUserAvatar(userData.avatar);
  })
  .catch(err => console.error(`Что-то пошло не так: ${err}`));

// Render Card in DOM
function createCard(data) {
  const card = new Card(
    data,
    handleCardClick,
    '.card__template',
    userId,
    handleLikeCard,
    handleDeleteCard
  );
  return card.renderCard();
}

function handleDeleteCard(card) {
  const handleDeleteSubmit = () => {
    api
      .deleteCard(card.cardId)
      .then(res => {
        card.deleteNewCard(res);
        popupSubmit.close();
      })
      .catch(err => console.error(`Ошибка при удалении карточки: ${err}`));
  };
  popupSubmit.open();
  popupSubmit.setSubmitAction(handleDeleteSubmit);
}

function handleLikeCard(card) {
  if (!card.isLiked()) {
    api
      .likeCard(card.cardId)
      .then(res => {
        card.like();
        card.countLikes(res);
      })
      .catch(err => console.error(`Ошибка при постановке лайка: ${err}`));
  } else {
    api
      .unlikeCard(card.cardId)
      .then(res => {
        card.unlike();
        card.countLikes(res);
      })
      .catch(err => console.error(`Ошибка при снятии лайка: ${err}`));
  }
}

const cardList = new Section(
  {
    renderer: item => {
      const cardElement = createCard(item);
      cardList.addItem(cardElement);
    }
  },
  '.photos'
);

//Add Card Popup
function handleFormAddCardSubmit(formValues) {
  popupAddCard.renderLoading(true);
  api
    .addCard({ name: formValues.title, link: formValues.link })
    .then(data => {
      cardList.addNewItem(createCard(data));
    })
    .catch(err => console.error(`Ошибка при создании карточки: ${err}`))
    .finally(() => popupAddCard.renderLoading(false));
}

const popupAddCard = new PopupWithForm('.popup_add', handleFormAddCardSubmit);
popupAddCard.setEventListeners();

function handleAddCardPopupOpen() {
  popupAddCard.open();
  formAddPopupValidator.resetValidation();
}

buttonAddCard.addEventListener('click', handleAddCardPopupOpen);

//Edit Avatar Popup
const popupEditAvatar = new PopupWithForm('.popup_change-avatar', handleFormEditAvatatSubmit);
popupEditAvatar.setEventListeners();

function handleFormEditAvatatSubmit(newAvatar) {
  popupEditAvatar.renderLoading(true);
  api
    .changeAvatar(newAvatar)
    .then(data => {
      userProfile.setUserAvatar(data.avatar);
    })
    .catch(err => console.error(`Ошибка при изменении аватара: ${err}`))
    .finally(() => popupEditAvatar.renderLoading(false));
}

function handleEditAvatarOpen() {
  popupEditAvatar.open();
  formEditAvatarValidator.resetValidation();
}
avatar.addEventListener('click', handleEditAvatarOpen);

//Edti Profile Popup
function handleFormEditProfileSubmit(userData) {
  popupEditProfile.renderLoading(true);
  api
    .changeUserInfo(userData)
    .then(formValues => {
      userProfile.setUserInfo({ name: formValues.name, occupation: formValues.about });
    })
    .catch(err => console.error(`Ошибка при изменении данных профиля: ${err}`))
    .finally(() => popupEditProfile.renderLoading(false));
}

const userProfile = new UserInfo({
  userNameElement: '.profile__name',
  userOccupationElement: '.profile__occupation',
  userAvatarElement: '.profile__avatar'
});

const popupEditProfile = new PopupWithForm('.popup_edit', handleFormEditProfileSubmit);
popupEditProfile.setEventListeners();

function handleEditProfilePopupOpen() {
  popupEditProfile.open();
  const initialInfo = userProfile.getUserInfo();
  userNameInput.value = initialInfo.name;
  userOccupationInput.value = initialInfo.occupation;
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

const formEditAvatarValidator = new FormValidator(config, formEditAvatarElement);
formEditAvatarValidator.enableValidation();

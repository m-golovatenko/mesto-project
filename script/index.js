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
//Form
const formEditElement = document.forms['edit'];
const formAddCardElement = document.forms['add'];
//GridSection
const photosContainer = document.querySelector('.photos');
//Scale Image Popup
const popupScalePhoto = document.querySelector('.popup_photo-scale');
const imageScalePhoto = popupScalePhoto.querySelector('.popup__scale-photo');
const subtitleScalePhoto = popupScalePhoto.querySelector('.popup__subtitle');
//Close Buttons
const popupCloseButtons = document.querySelectorAll('.popup__close-button');
//New card template
// const newCardTemplate = document.querySelector('.card__template').content;

//FUNCTIONS
//Edit Profile
function openEditPopup() {
  openPopup(popupEdit);
  userNameInput.value = userName.textContent;
  userOccupationInput.value = userOccupation.textContent;
  resetValidation(popupEdit, config);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userOccupation.textContent = userOccupationInput.value;
  closePopup(popupEdit);
}

//Create Card Funcrion
class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = templateSelector;
  }

  _getTemplate() {
    const сardElement = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector('.card')
      .cloneNode(true);

    return сardElement;
  }

  _handleLikeButtonClick() {
    this._cardLikeButton.classList.toggle('card__like-button_active');
  }

  _handleDeleteButtonClick() {
    this._element.remove();
  }

  _handleOpenScalePhotoPopup() {
    imageScalePhoto.src = this._link;
    subtitleScalePhoto.textContent = this._name;
    popupScalePhoto.classList.add('popup_opened');
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener('click', () => {
      this._handleLikeButtonClick();
    });

    this._cardDeleteButton.addEventListener('click', () => {
      this._handleDeleteButtonClick();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleOpenScalePhotoPopup();
    });
  }

  createCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__place');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;
    this._cardLikeButton = this._element.querySelector('.card__like-button');
    this._cardDeleteButton = this._element.querySelector('.card__delete-button');

    this._setEventListeners();
    return this._element;
  }
}

cards.forEach(card => {
  const newCard = new Card(card, '.card__template');
  const cardElement = newCard.createCard();
  document.querySelector('.photos').append(cardElement);
});

// const cardElement = new Card(cards, '.card__template', setEventListeners);
// function createCard(card) {
//   const newCard = newCardTemplate.querySelector('.card').cloneNode(true);
//   const cardTitle = newCard.querySelector('.card__title');
//   cardTitle.textContent = card.name;
//   const cardImage = newCard.querySelector('.card__place');
//   cardImage.src = card.link;
//   cardImage.alt = card.name;
//   cardImage.addEventListener('click', function () {
//     openPopup(popupScalePhoto);
//     imageScalePhoto.src = card.link;
//     imageScalePhoto.alt = card.name;
//     subtitleScalePhoto.textContent = card.name;
//   });
//   const cardLikeButton = newCard.querySelector('.card__like-button');
//   cardLikeButton.addEventListener('click', handleLikeButtonClick);
//   const cardDeleteButton = newCard.querySelector('.card__delete-button');
//   cardDeleteButton.addEventListener('click', handleDeleteButtonClick);

//   return newCard;
// }

// //Initial cards creation
// const renderInitialCards = function (card) {
//   photosContainer.append(createCard(card));
// };

// cards.forEach(renderInitialCards);

//Add card
function openAddCardPopup() {
  formAddCardElement.reset();
  openPopup(popupAddCard);
  resetValidation(popupAddCard, config);
}

function renderCard(card) {
  photosContainer.prepend(createCard(card));
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard({ name: cardTitleInput.value, link: cardLinkInput.value });
  closePopup(popupAddCard);
}

//Like card
// function handleLikeButtonClick(evt) {
//   evt.target.classList.toggle('card__like-button_active');
// }

//Delete card
// function handleDeleteButtonClick(evt) {
//   const button = evt.target;
//   const card = button.closest('.card');
//   card.remove();
// }

//Open and close popups
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeOnEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeOnEscape);
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

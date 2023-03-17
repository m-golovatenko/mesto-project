//ПЕРЕМЕННЫЕ
//Popups
const popupList = document.querySelectorAll('.popup');
//Edit popup
const editPopup = document.querySelector('.popup_edit');
const editProfileButton = document.querySelector('.profile__edit-button');
const userName = document.querySelector('.profile__name');
const userNameInput = document.querySelector('.popup__input_type_name');
const userOccupation = document.querySelector('.profile__occupation');
const userOccupationInput = document.querySelector('.popup__input_type_occupation');
//Add Card popup
const addCardPopup = document.querySelector('.popup_add');
const addCardButton = document.querySelector('.profile__add-button');
const cardTitleInput = document.querySelector('.popup__input_type_title');
const cardLinkInput = document.querySelector('.popup__input_type_link');
//Form
const editFormElement = document.forms['edit'];
const addCardFormElement = document.forms['add'];
//GridSection
const photos = document.querySelector('.photos');
//Scale Image Popup
const scalePhotoPopup = document.querySelector('.popup_photo-scale');
const scalePhotoImage = scalePhotoPopup.querySelector('.popup__scale-photo');
const scalePhotoSubtitle = scalePhotoPopup.querySelector('.popup__subtitle');
//Close Buttons
const popupCloseButtons = document.querySelectorAll('.popup__close-button');

//Edit Profile
editProfileButton.addEventListener('click', function () {
  openPopup(editPopup);
  userNameInput.value = userName.textContent;
  userOccupationInput.value = userOccupation.textContent;
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userOccupation.textContent = userOccupationInput.value;
  closePopup(editPopup);
}
editFormElement.addEventListener('submit', handleProfileFormSubmit);

//Create Card Funcrion
function createCard(name, link) {
  const newCard = document.querySelector('.card__template').content.cloneNode(true);
  const cardTitle = newCard.querySelector('.card__title');
  cardTitle.textContent = name;
  const cardImage = newCard.querySelector('.card__place');
  cardImage.setAttribute('src', link);
  cardImage.alt = name;
  cardImage.addEventListener('click', function () {
    openPopup(scalePhotoPopup);
    scalePhotoImage.src = cardImage.src;
    scalePhotoImage.alt = name;
    scalePhotoSubtitle.textContent = name;
  });
  const cardLikeButton = newCard.querySelector('.card__like-button');
  cardLikeButton.addEventListener('click', handleLikeButtonClick);
  const cardDeleteButton = newCard.querySelector('.card__delete-button');
  cardDeleteButton.addEventListener('click', handleDeleteButtonClick);

  return newCard;
}

//Initial cards creation
const initialCard = function (card) {
  photos.append(createCard(card.name, card.link));
};

cards.forEach(initialCard);

//Add card
addCardButton.addEventListener('click', function () {
  openPopup(addCardPopup);
});

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  photos.prepend(createCard(cardTitleInput.value, cardLinkInput.value));
  addCardFormElement.reset();
  closePopup(addCardPopup);
}

addCardFormElement.addEventListener('submit', handleAddCardFormSubmit);

//Like card
function handleLikeButtonClick(evt) {
  evt.target.classList.toggle('card__like-button_active');
}

//Delete card
function handleDeleteButtonClick(evt) {
  const button = evt.target;
  const card = button.closest('.card');
  card.remove();
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

document.addEventListener('keydown', closeOnEscape);

//Close on overlay
popupList.forEach(popup => {
  popup.addEventListener('click', function (evt) {
    if (evt.currentTarget === evt.target) {
      closePopup(popup);
    }
  });
});

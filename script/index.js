//ПЕРЕМЕННЫЕ
//Popup
const popup = document.querySelector('.popup');
//Edit popup
const editPopup = document.querySelector('.popup_edit');
const editProfileButton = document.querySelector('.profile__edit-button');
const userName = document.querySelector('.profile__name');
const userNameInput = document.querySelector('.input__name');
const userOccupation = document.querySelector('.profile__occupation');
const userOccupationInput = document.querySelector('.input__occupation');
const popupEditPopupCloseButton = editPopup.querySelector('.popup__close-button');
//Add Card popup
const addCardPopup = document.querySelector('.popup_add');
const addCardButton = document.querySelector('.profile__add-button');
const cardTitleInput = document.querySelector('.input__title');
const cardLinkInput = document.querySelector('.input__link');
const popupAddPopupCloseButton = addCardPopup.querySelector('.popup__close-button');
//Form
const editFormElement = document.querySelector('.popup__form_edit');
const addCardFormElement = document.querySelector('.popup__form_add');
//Cards Massif
const cards = [
  {
    name: 'Гора Килиманджаро',
    link: 'https://images.unsplash.com/photo-1631646109206-4b5616964f84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Гора Монблан',
    link: 'https://images.unsplash.com/flagged/photo-1579168169191-efd70a2cd05d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
  },
  {
    name: 'Массив Винсон',
    link: 'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892118/EducationHub/photos/mount-vinson-peak.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: 'https://images.unsplash.com/photo-1518277232585-44d47773da22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    name: 'Гора Джомолунгма',
    link: 'https://images.unsplash.com/photo-1637846959991-18e54d6e2035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
  },
  {
    name: 'Гора Аконкагуа',
    link: 'https://images.unsplash.com/photo-1579741838571-33188fcead07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  }
];
//GridSection
const photos = document.querySelector('.photos');

//Scale Image Popup
const scalePhotoPopup = document.querySelector('.popup_photo-scale');
const scalePhotoPopupCloseButton = scalePhotoPopup.querySelector('.popup__close-button');

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
  cardImage.addEventListener('click', function () {
    openPopup(scalePhotoPopup);
    const scalePhotoImage = scalePhotoPopup.querySelector('.popup__scale-photo');
    scalePhotoImage.src = cardImage.src;
    const scalePhotoSubtitle = scalePhotoPopup.querySelector('.popup__subtitle');
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
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//Close on button
popupEditPopupCloseButton.addEventListener('click', function () {
  closePopup(editPopup);
});

popupAddPopupCloseButton.addEventListener('click', function () {
  closePopup(addCardPopup);
});

scalePhotoPopupCloseButton.addEventListener('click', function () {
  closePopup(scalePhotoPopup);
});

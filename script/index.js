//ПЕРЕМЕННЫЕ
//Popup
const popup = document.querySelector('.popup');
//Edit popup
const editPopup = document.querySelector('.popup_edit');
const editProfileButton = document.querySelector('.profile__edit-button');
const userName = document.querySelector('.profile__name');
const userOccupation = document.querySelector('.profile__occupation');
const userNameInput = document.querySelector('.popup__name');
const userOccupationInput = document.querySelector('.popup__occupation');
//Edit popup
const addCardPopup = document.querySelector('.popup_add');
const addCardButton = document.querySelector('.profile__add-button');
const cardTitleInput = document.querySelector('.popup__title');
const cardLinkInput = document.querySelector('.popup__link');
//Popup close button
const popupCloseButton = document.querySelector('.popup__close-button');
//Form
const editFormElement = document.querySelector('.popup__form_edit');
const addFormElement = document.querySelector('.popup__form_add');
//Like

//Cards Massif
const cards = [
  {
    name: 'Гора Килиманджаро',
    image:
      'https://images.unsplash.com/photo-1631646109206-4b5616964f84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Гора Монблан',
    image:
      'https://images.unsplash.com/flagged/photo-1579168169191-efd70a2cd05d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
  },
  {
    name: 'Массив Винсон',
    image:
      'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892118/EducationHub/photos/mount-vinson-peak.jpg'
  },
  {
    name: 'Гора Эльбрус',
    image:
      'https://images.unsplash.com/photo-1518277232585-44d47773da22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    name: 'Гора Джомолунгма',
    image:
      'https://images.unsplash.com/photo-1637846959991-18e54d6e2035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
  },
  {
    name: 'Гора Аконкагуа',
    image:
      'https://images.unsplash.com/photo-1579741838571-33188fcead07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  }
];
//GridSection
const photos = document.querySelector('.photos');

//Initial cards creation
function createCard(card) {
  const newCard = document.querySelector('.card__template').content.cloneNode(true);
  const cardImage = newCard.querySelector('.card__place');
  cardImage.setAttribute('src', card.image);
  const cardTitle = newCard.querySelector('.card__title');
  cardTitle.textContent = card.name;
  const cardLikeButton = newCard.querySelector('.card__like-button');
  cardLikeButton.addEventListener('click', handleLikeButtonClick);
  const cardDeleteButton = newCard.querySelector('.card__delete-button');
  cardDeleteButton.addEventListener('click', handleDeleteButtonClick);

  photos.append(newCard);
}
cards.forEach(createCard);

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

//Openning and closing popups
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

popupCloseButton.addEventListener('click', closePopup);
function closePopup() {
  popup.classList.remove('popup_opened');
}

//Edit popup
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

//Add card

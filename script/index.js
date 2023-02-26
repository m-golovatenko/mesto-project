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
cards.forEach(function (card) {
  const newCard = document.querySelector('.card__template').content.cloneNode(true);
  const cardImage = newCard.querySelector('.card__place');
  cardImage.setAttribute('src', card.image);
  const cardTitle = newCard.querySelector('.card__title');
  cardTitle.textContent = card.name;
  const cardLike = newCard.querySelector('.card__like-button');
  photos.append(newCard);
});

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

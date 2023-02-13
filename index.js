//ПЕРЕМЕННЫЕ
//Edit button
const editProfileButton = document.querySelector('.profile__edit-button');
if (!editProfileButton) {
  throw new Error('No editProfileButton');
}
//Popup
const editPopup = document.querySelector('.edit-popup');
if (!editPopup) {
  throw new Error('No editPopup');
}
//Popup close button
const editPopupCloseButton = document.querySelector('.edit-popup__close-button');
if (!editPopupCloseButton) {
  throw new Error('No editPopup');
}
//Form
const formElement = document.querySelector('.edit-popup__form');
if (!formElement) {
  throw new Error('No formElement');
}
//User object
const user = {
  name: 'Жак-Ив Кусто',
  occupation: 'Исследователь океана'
};
//Name
const userName = document.querySelector('.profile__name');
if (!userName) {
  throw new Error('No userName');
}
//Occupation
const userOccupation = document.querySelector('.profile__occupation');
if (!userOccupation) {
  throw new Error('No userOccupation');
}
//Name Input
const userNameInput = document.querySelector('.edit-popup__name');
if (!userNameInput) {
  throw new Error('No userNameInput');
}
//Occupation Input
const userOccupationInput = document.querySelector('.edit-popup__occupation');
if (!userOccupationInput) {
  throw new Error('No userOccupationInput');
}

userName.textContent = user.name;

userOccupation.textContent = user.occupation;

//Openning and closing popup
editProfileButton.addEventListener('click', openEditPopup);
function openEditPopup() {
  editPopup.classList.remove('hidden');
}

userNameInput.value = user.name;
userOccupationInput.value = user.occupation;

editPopupCloseButton.addEventListener('click', closeEditPopup);
function closeEditPopup() {
  editPopup.classList.add('hidden');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userOccupation.textContent = userOccupationInput.value;
}

formElement.addEventListener('submit', handleFormSubmit);

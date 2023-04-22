//Cards Massif
const cards = [
  {
    name: 'Гора Килиманджаро',
    alt: '',
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

//Config object
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  saveButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_disabled',
  errorClass: 'popup__input-error_active'
};

//VARIABLE

//Edit popup
//Form
export const formEditElement = document.forms['edit'];
export const formAddCardElement = document.forms['add'];
//Edit
export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const userName = document.querySelector('.profile__name');
export const userOccupation = document.querySelector('.profile__occupation');
export const userNameInput = formEditElement.elements.name;
export const userOccupationInput = formEditElement.elements.occupation;
//Add Card popup
export const buttonAddCard = document.querySelector('.profile__add-button');
export const cardTitleInput = formAddCardElement.elements.title;
export const cardLinkInput = formAddCardElement.elements.link;
//GridSection
export const photosContainer = document.querySelector('.photos');
//Close Buttons
export const popupCloseButtons = document.querySelectorAll('.popup__close-button');

export { cards, config };

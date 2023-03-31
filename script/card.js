import { openPopup } from './index.js';

//Scale Image Popup
const popupScalePhoto = document.querySelector('.popup_photo-scale');
const imageScalePhoto = popupScalePhoto.querySelector('.popup__scale-photo');
const subtitleScalePhoto = popupScalePhoto.querySelector('.popup__subtitle');

//Card Class (card and button listeners creation)
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
    openPopup(popupScalePhoto);
    imageScalePhoto.src = this._link;
    subtitleScalePhoto.textContent = this._name;
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
      this._handleCloseScalePhotoPopup();
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

export { Card };

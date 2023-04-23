import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._imageTitle = this._popupElement.querySelector('.popup__subtitle');
    this._image = this._popupElement.querySelector('.popup__scale-photo');
  }

  open(name, link) {
    this._image.src = link;
    this._image.alt = name;
    this._imageTitle.textContent = name;

    super.open();
  }
}

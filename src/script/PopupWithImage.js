import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageTitle = this._popupSelector.querySelector('.popup__subtitle');
    this._image = this._popupSelector.querySelector('.popup__scale-photo');
  }

  open(name, link) {
    this._image.src = link;
    this._image.alt = name;
    this._imageTitle.textContent = name;

    super.open();
  }
}

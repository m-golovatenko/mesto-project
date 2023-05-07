export default class Popup {
  constructor(popupElement) {
    this._popupElement = document.querySelector(popupElement);
    this._popupCloseButton = this._popupElement.querySelector('.popup__close-button');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener('mousedown', evt => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
    });

    this._popupCloseButton.addEventListener('click', evt => {
      if (evt.target.classList.contains('popup__close-button')) {
        this.close();
      }
    });
  }
}

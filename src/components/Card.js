//Card Class (card and button listeners creation)
export default class Card {
  constructor(
    data,
    handleCardClick,
    templateSelector,
    userId,
    handleLikeButtonClick,
    handleDeleteButtonClick
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardTemplateSelector = templateSelector;
    this.cardId = data._id;
    this._handleCardClick = handleCardClick;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._handleLikeButtonClick = handleLikeButtonClick;
    this._handleDeleteButtonClick = handleDeleteButtonClick;
  }

  _getTemplate() {
    const сardElement = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector('.card')
      .cloneNode(true);

    return сardElement;
  }

  deleteNewCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener('click', () => {
      this._handleLikeButtonClick(this);
    });

    this._cardDeleteButton.addEventListener('click', () => {
      this._handleDeleteButtonClick(this);
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  countLikes(data) {
    this._likeCounter.textContent = data.likes.length;
    this._likes = data.likes;
  }

  _likeCard() {
    this.isLiked();
  }

  like() {
    this._cardLikeButton.classList.add('card__like-button_active');
  }

  unlike() {
    this._cardLikeButton.classList.remove('card__like-button_active');
  }

  isLiked() {
    return this._likes.some(item => item._id === this._userId);
  }

  renderCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__place');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;

    this._cardDeleteButton = this._element.querySelector('.card__delete-button');

    if (this._ownerId !== this._userId) {
      this._cardDeleteButton.remove();
    }

    this._cardLikeButton = this._element.querySelector('.card__like-button');
    this._likeCounter = this._element.querySelector('.card__like-counter');
    this._likeCounter.textContent = this._likes.length;

    if (this.isLiked()) {
      this.like();
    }

    this._setEventListeners();
    this._likeCard();
    return this._element;
  }
}

export { Card };

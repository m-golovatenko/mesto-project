export default class UserInfo {
  constructor({ userNameElement, userOccupationElement, userAvatarElement }) {
    this._name = document.querySelector(userNameElement);
    this._occupation = document.querySelector(userOccupationElement);
    this._avatar = document.querySelector(userAvatarElement);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      occupation: this._occupation.textContent
    };
  }

  setUserInfo({ name, occupation }) {
    this._name.textContent = name;
    this._occupation.textContent = occupation;
  }

  setUserAvatar(avatar) {
    this._avatar.src = avatar;
  }
}

export default class UserInfo {
  constructor({ userNameElement, userOccupationElement }) {
    this._name = document.querySelector(userNameElement);
    this._occupation = document.querySelector(userOccupationElement);
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
}

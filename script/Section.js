export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._containerSelector.append(element);
  }

  renderItems() {
    this._initialArray.forEach(item => {
      this._renderer(item);
    });
  }
}

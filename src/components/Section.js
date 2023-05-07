export default class Section {
  constructor({ renderer }, container) {
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }

  addItem(element) {
    this._container.append(element);
  }

  addNewItem(element) {
    this._container.prepend(element);
  }

  renderItems(items) {
    items.forEach(item => this._renderer(item));
  }
}

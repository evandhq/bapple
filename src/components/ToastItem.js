import animate from '../utils/animation';

export default class ToastItem {
  timeout = 5000;
  params = null;
  container = null;

  constructor(params, container) {
    this.params = { ...params };
    this.container = container;
  }

  getTitle = () => this.params.title ? `<strong class="toast-item-title">${this.params.title}</strong>` : '';

  getDescription = () => this.params.description ? `<div class="toast-item-description">${this.params.description}</div>` : '';

  getContent = () => `<div class="toast-item toast-${this.params.type ? this.params.type : 'message'}">${this.getTitle()}${this.getDescription()}</div>`;

  render() {
    const timeout = this.params.timeout ? this.params.timeout : this.timeout;
    const item = document.createElement('div');
    item.innerHTML = this.getContent();
    const itemIdAttr = document.createAttribute('id');
    itemIdAttr.value = this.params.id;
    item.setAttributeNode(itemIdAttr);

    if (this.container) {
      this.container.appendChild(item);

      setTimeout(() => {
        animate({
          start: Number(window.getComputedStyle(item).opacity),
          end: 0,
          duration: 3000,
          onRequest: (opacity) => {
            item.style.opacity = opacity;
          },
          onComplete: () => {
            item.remove();
          }
        });
      }, timeout);
    }
  }
}

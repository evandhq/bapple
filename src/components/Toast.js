import ToastItem from './ToastItem';

export default class Toast {
  static direction = 'ltr';
  static position = 'left';
  static size = 'normal';
  static container = null;
  static lastItemId = 1;

  static config({ direction, position, size, timeout }) {
    if (direction) {
      this.direction = direction;
    }

    if (position) {
      this.position = position;
    }

    if (size) {
      this.size = size;
    }

    if (timeout) {
      ToastItem.timeout = timeout;
    }
  }

  static add(params) {
    if (!this.container) {
      const id = document.createAttribute('id');
      id.value = 'toast';
      const classes = document.createAttribute('class');
      classes.value = `toast toast-direction-${this.direction} toast-position-${this.position} toast-size-${this.size}`;
      const div = document.createElement('div');
      div.setAttributeNode(id);
      div.setAttributeNode(classes);
      document.body.appendChild(div);
      this.container = document.getElementById('toast');
    }

    const id = `toast-item-${this.lastItemId++}`;
    const item = new ToastItem({ ...params, id }, this.container);
    item.render();
  }

  static info(title, description = '', timeout = null) {
    Toast.add({ title, description, timeout, type: 'info' });
  }

  static success(title, description = '', timeout = null) {
    Toast.add({ title, description, timeout, type: 'success' });
  }

  static error(title, description = '', timeout = null) {
    Toast.add({ title, description, timeout, type: 'error' });
  }

  static warning(title, description = '', timeout = null) {
    Toast.add({ title, description, timeout, type: 'warning' });
  }

  static message(title, description = '', timeout = null) {
    Toast.add({ title, description, timeout, type: 'message' });
  }
}

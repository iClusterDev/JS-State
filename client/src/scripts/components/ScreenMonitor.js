import store from '../store/store';

class ScreenMonitor {
  constructor() {
    this.element = document.createElement('p');
    this.create();
    this.render();
  }

  render(width, height) {
    this.element.textContent = `width: ${
      width || store.state.display.width
    } - height: ${height || store.state.display.height}`;
  }

  create() {
    document.body.appendChild(this.element);
    store.events.on('display-change', (data) => {
      const { width, height } = data;
      this.render(width, height);
    });
  }
}

export default ScreenMonitor;

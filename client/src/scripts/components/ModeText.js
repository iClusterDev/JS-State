import store from '../store/store';

class ModeText {
  constructor() {
    this.element = document.createElement('p');
    this.create();
    this.render();
  }

  render(mode) {
    this.element.textContent = `current status: ${mode || store.state.mode}`;
  }

  create() {
    document.body.appendChild(this.element);
    store.on('mode-change', (data) => {
      this.render(data);
    });
  }
}

export default ModeText;

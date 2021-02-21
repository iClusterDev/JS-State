import store from '../store/store';

class ModeButton {
  constructor() {
    this.element = document.createElement('button');
    this.create();
    this.render();
  }

  toggleMode() {
    if (store.state.mode === 'ready') {
      store.dispatch('changeMode', 'running');
    } else {
      store.dispatch('changeMode', 'ready');
    }
  }

  render() {
    this.element.textContent = store.state.mode === 'ready' ? 'start' : 'stop';
  }

  create() {
    document.body.appendChild(this.element);
    this.element.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleMode();
    });
    store.on('mode-change', () => {
      this.render();
    });
  }
}

export default ModeButton;

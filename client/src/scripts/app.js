import store from './store/store';
import ModeText from './components/ModeText';
import ModeButton from './components/ModeButton';
import ScreenMonitor from './components/ScreenMonitor';

window.addEventListener('resize', (e) => {
  e.preventDefault();
  const { innerWidth: width, innerHeight: height } = window;
  store.dispatch('changeDisplay', { width, height });
});

window.addEventListener('load', () => {
  const modeText = new ModeText();
  const modeButton = new ModeButton();
  const screenMonitor = new ScreenMonitor();
});

import Store from '../lib/Store';

const state = {
  mode: 'ready',
  score: 0,
  display: {
    width: 800,
    height: 600,
  },
};

const actions = {
  changeMode: (context, payload) => {
    context.commit('setMode', payload);
  },
  changeDisplay: (context, payload) => {
    context.commit('setDisplay', payload);
  },
};

const mutations = {
  setMode: (state, payload) => {
    state.mode = payload;
  },
  setDisplay: (state, payload) => {
    state.display = {
      width: payload.width,
      height: payload.height,
    };
  },
};

export default new Store({
  state,
  actions,
  mutations,
});

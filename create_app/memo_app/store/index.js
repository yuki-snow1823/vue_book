import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

export const state = () => ({
  message: 'count number.',
  counter: 0,
})

export const mutations = {
  doit(state) {
    var n = Math.floor(Math.random() * 10);
    state.counter += n;
    state.message = 'add ' + n + '.';
  },
  reset(state) {
    state.counter = 0;
    state.message = "reset now.";
  },
}

export const plugins = [
  createPersistedState(),
]

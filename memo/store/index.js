import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

// プラグインを読み込んでいる
export const plugins = [
  createPersistedState(),
]

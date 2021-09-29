const state = {
  locale: {},
}

const getters = {
  getLocale(state) {
    return state.locale
  },
}

const mutations = {
  SET_LOCALE(state, data) {
    state.locale = data
  },
}

const actions = {
  setLocale({ commit }, payload) {
    commit('SET_LOCALE', payload)
  },
}

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions,
}

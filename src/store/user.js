const state = {
  user: null,
}

const getters = {
  getUser(state) {
    return state.user
  },
}

const mutations = {
  SET_USER(state, data) {
    state.user = data
  },
}

const actions = {
  setUser({ commit }, payload) {
    console.log(payload)
    commit('SET_USER', payload)
  },
}

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions,
}

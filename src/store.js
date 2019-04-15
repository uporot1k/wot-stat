import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    nickname: ''
  },
  mutations: {
    setNick(state, payload) {
      state.nickname = payload
    },
    setList (state, payload) {
      state.list = payload
    }
  },
  actions: {
    getID ({commit, state}, payload) {
      let nickname = payload
      console.log()
      commit('setNick', nickname)
      axios
        .get(`https://api.worldoftanks.ru/wot/account/list/?application_id=071fd10b3827eb09b9d8e41c4bd3ca5c&search=${nickname}&limit=5`)
        .then(response => {
          let res = response.data.data
          console.log(res)
          commit('setList', res)
        });

    },
    getUserStat({commit, state}, payload) {
      console.log(payload)
      axios
        .get(`https://api.worldoftanks.ru/wot/account/info/?application_id=071fd10b3827eb09b9d8e41c4bd3ca5c&account_id=${payload}`)
        .then(response => {
          let res = response.data
          console.log(res)
        })
    }

  }
})

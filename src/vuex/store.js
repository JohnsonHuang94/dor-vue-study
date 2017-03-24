import Vue from 'vue'
import Vuex from 'vuex'

export const TIPS_STATU = 'TIPS_STATU'

Vue.use(Vuex)

export default {
	state: JSON.parse(localStorage.getItem('appState')) || {}
    mutations: {
        [TIPS_STATU] (state, statu) {
            localStorage.setItem('appState.tips_statu',statu)
            Object.assign(state, statu)
        }
    },
    actions: {
        [TIPS_STATU]({commit}, appState) {
            commit(TIPS_STATU, appState)
        }
    }
}

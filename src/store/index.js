import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state= {
  city: '北京'
}
const mutations = {
  changeCity(state,val){
    state.city = val
  }
}


export default new Vuex.Store({
  state,
  mutations
})

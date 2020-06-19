import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
let defaultCity = '上海'
defaultCity = localStorage.city
const state= {
  city: defaultCity
}

const mutations = {
  changeCity(state,val){
    state.city = val
    localStorage.city = val
  }
}


export default new Vuex.Store({
  state,
  mutations
})

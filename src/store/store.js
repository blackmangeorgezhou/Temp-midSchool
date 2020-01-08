import Vue from 'vue'
import Vuex from 'vuex'
import MUTATIONS from './common'
Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    isLoading: false,
    regionList: [],
    timeSelection: [],
    classList: [],
    selectedMenu: {
      region: '',
      time: ''
    }
  },
  mutations: {
    isLoading (state, value) {
      state.isLoading = value
    },

    regionList (state, regions) {
      console.log(state)
      if (regions) {
        state.regionList = regions
      }
    },

    timeSelection (state, selections) {
      if (selections) {
        state.timeSelection = selections
      }
    },

    classList (state, classes) {
      if (classes) {
        state.classList = classes
      }
    },

    selectedMenu (state, menuValue) {
      if (menuValue) {
        state.selectedMenu = menuValue
      }
    }
  },
  actions: {
    setIsLoading: ({ commit }, value) => {
      commit(MUTATIONS.ISLOADING, value)
    },

    setRegionList: ({ commit }, regions) => {
      commit(MUTATIONS.REGIONLIST, regions)
    },

    setTimeSelection: ({ commit }, selections) => {
      commit(MUTATIONS.TIMESELECTION, selections)
    },

    setClassList: ({ commit }, classes) => {
      commit(MUTATIONS.CLASSLIST, classes)
    },

    setSelectedMenu: ({ commit }, menuValue) => {
      commit(MUTATIONS.SELECTEDMENU, menuValue)
    }
  }
})

export default store

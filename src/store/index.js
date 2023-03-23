import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import Api from '../views/Api'; 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    all_courses: [],
    user: null,
    token: null,
    all_instructors: []
  },
  getters: {
    isAuthenticated: state => !!state.user,
    StateUser: state => state.user,
    token: state => state.token,
    instructors: state => state.all_instructors
  },
  mutations: {
    allCoursesStore(state, payload) {
      state.all_courses = payload.all_courses
    },
    getAllInstructors(state, payload){
      state.all_instructors = payload.instructors
    },
    setUser(state, payload) {
      state.user = payload
    },
    setToken(state, payload) {
      state.token = payload
    },
    LogOut(state) {
      state.user = null
      state.token = null

    },
  },
  actions: {
    async LogIn({ commit }, user) {
      await commit('setUser', user)
    },
    async SetToken({ commit }, token) {
      await commit('setToken', token)
    },

    async LogOut({ commit }) {
      let user = null
      commit('LogOut', user)
    },

    async getInstructors(context){
      await Api.axios_instance.get(Api.baseUrl+'course_instructors')
      .then(res => {
        console.log(res);
        context.commit('getAllInstructors', res.data)
      })
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})

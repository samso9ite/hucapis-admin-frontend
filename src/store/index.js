import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import Api from '../views/Api'; 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    all_courses: [],
    my_courses: [],
    recommended_courses: [],
    user: null,
    token: null,
  },
  getters: {
    isAuthenticated: state => !!state.user,
    myCourses: state => state.my_courses,
    recommendedCourses: state => state.recommended_courses,
    StateUser: state => state.user,
    token: state => state.token,
  },
  mutations: {
    allCoursesStore(state, payload) {
      state.all_courses = payload.all_courses
    },
    setMyCourses(state, payload) {
      state.my_courses = payload.all_courses
    },
    setRecommendedCourses(state, payload) {
      state.recommended_courses = payload
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
    async GetRecommendedCourses({ commit }, token) {
      Api.axios_instance.get(Api.baseUrl + "user/courses/recommended").then(async (res) => {
        await commit('setRecommendedCourses', res.data.data)
      });
    },
    async GetUserCourses({ commit }) {
      Api.axios_instance.get(Api.baseUrl + "courses").then(async (res) => {
         await commit('setMyCourses', { all_courses: res.data.data.data })
      });
    },
    
    async LogOut({ commit }) {
      let user = null
      commit('LogOut', user)
    },
  },
  modules: {
  },
  plugins: [createPersistedState()]
})

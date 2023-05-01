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
    all_instructors: [],
    course_edit: {},
    dashboardCount: {},
    dashboardStatistics: {},
    dashboardTopCourses: [],
    dashboardLeaderboard: [],
    revenueByMonth: {},
    allCategory: []
  },
  getters: {
    isAuthenticated: state => !!state.user,
    StateUser: state => state.user,
    token: state => state.token,
    instructors: state => state.all_instructors,
    allCourses: state => state.all_courses,
    headerStats: state => state.dashboardCount,
    dashboardStatistics: state => state.dashboardStatistics,
    dashboardTopCourses: state => state.dashboardTopCourses,
    dashboardLeaderboard: state => state.dashboardLeaderboard,
    revenueByMonth: state => state.revenueByMonth,
    chart_data: state => state.dashboardStatistics.chart_data,
    allCategory: state => state.allCategory
  },
  mutations: {
    setAllCourses(state, payload) {
      state.all_courses = payload
    },
    getAllInstructors(state, payload) {
      state.all_instructors = payload
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
    courseEdit(state, payload) {
      state.course_edit = payload
    },
    setDashboardCounts(state, payload) {
      state.dashboardCount = payload
    },
    setDashboardStatistics(state, payload) {
      state.dashboardStatistics = payload
    },
    setDashboardTopCourses(state, payload) {
      state.dashboardTopCourses = payload
    },
    setDashboardLeaderboard(state, payload) {
      state.dashboardLeaderboard = payload
    },
    setRevenueByMonth(state, payload) {
      state.revenueByMonth = payload
    },
    setCategories(state, payload){
      state.allCategory = payload
    }
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
    async getInstructors(context) {
      await Api.axios_instance.get(Api.baseUrl + 'course_instructors')
        .then(res => {
          let payload = res.data.data
          context.commit('getAllInstructors', payload)
        })
    },
    async AllCourses({ commit }, page = 1, per_page = 16) {
      Api.axios_instance.get(Api.baseUrl + "courses" + "?page=" + page + "&per_page=" + per_page).then(res => {
        commit('setAllCourses', res.data.data)
      });
    },
    async DashboardCount({ commit }) {
      Api.axios_instance.get(Api.baseUrl + "dashboard/counts").then(res => {
        const data = [{
          heading: res.data.data.total_courses,
          sub_heading: "Total Courses",
          icon: "../../assets/admin/dashboard_money.svg",
          currency: false,
        },
        {
          heading: res.data.data.total_students,
          sub_heading: "Total Students",
          icon: "../../assets/admin/people.svg",
          currency: false,
        },
        {
          heading: res.data.data.total_tutors,
          sub_heading: "Total Tutors",
          icon: "../../assets/admin/visitors.svg",
          currency: false,
        },
        {
          heading: res.data.data.total_revenues,
          sub_heading: "Total Revenue",
          icon: "../../assets/admin/dashboard_money.svg",
          currency: true,
        },]
        commit('setDashboardCounts', data)
      });
    },
    async DashboardLeaderboard({ commit }) {
      Api.axios_instance.get(Api.baseUrl + "dashboard/leader_board").then(res => {
        commit('setDashboardLeaderboard', res.data.data)
      });
    },
    async DashboardStatistics({ commit }) {
      Api.axios_instance.get(Api.baseUrl + "dashboard/statistics").then(res => {
        commit('setDashboardStatistics', res.data.data)
      });
    },
    async DashboardTopCourses({ commit }) {
      Api.axios_instance.get(Api.baseUrl + "dashboard/topCourses").then(res => {
        commit('setDashboardTopCourses', res.data.data)
      });
    },
    async RevenueByMonth({ commit }) {
      Api.axios_instance.get(Api.baseUrl + "dashboard/revenue_by_month").then(res => {
        commit('setRevenueByMonth', res.data.data)
      });
    },
    async getCategories(context){
      await Api.axios_instance.get(Api.baseUrl+'interests')
      .then(res => {
        context.commit('setCategories', res.data.data)
      })
    },
  },
  modules: {
  },
  plugins: [createPersistedState()]
})

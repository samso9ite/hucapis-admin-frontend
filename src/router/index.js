import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../views/auth/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sign-up',
    name: 'Signup',
    component: Signup,
    // meta: {guest: true}
  },
  {
    path: '/sign-in',
    name: 'Signin',
    component: () => import('../views/auth/Signin.vue'),
    meta: {guest: true}
  },
  {
    path: '/forget-password',
    name: 'ForgetPassword',
    component: () => import('../views/auth/ForgetPassword.vue'),
    meta: {guest: true}
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import('../views/auth/ResetPassword.vue'),
    props: route => ({query:route.query.token & route.query.email}),
    meta: {guest: true}
  },

  {
    path: '/verify',
    name: 'Verification',
    props: route => ({query:route.query.token & route.query.email}),
    component: () => import('../views/auth/Verify.vue'),
    meta: {guest: true}
  },

  {
    path: '/course-upload',
    name: 'CourseUpload',
    component: () => import('../views/CourseUpload.vue')
  },
  {
    path: '/course-details/:id',
    name: 'CourseDetails',
    component: () => import('../views/CourseDetails.vue'),
    props: true
  },
  {
    path: '/learners',
    name: 'Learners',
    component: () => import('../views/Learners.vue')
  },
  {
    path: '/revenue',
    name: 'Revenue',
    component: () => import('../views/Revenue.vue')
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('../views/Courses.vue')
  },
  {
    path: '/course-edit/:course_id',
    name: 'CourseUpload',
    component: () => import('../views/CourseUpload.vue'),
    props: true
  },
  {
    path: '/topic-edit/:course_id/:topic_id',
    name: 'CourseUpload',
    component: () => import('../views/CourseUpload.vue'),
    props: true
  },
  {
    path: '/instructors',
    name: 'Instructors',
    component: () => import('../views/Instructors.vue')
  },
  {
    path: '/tutors/:id',
    name: 'Tutors',
    component: () => import('../views/Tutors.vue'),
    props: true
  }
 
]

const router = new VueRouter({
  mode:'history',
  routes,
  linkActiveClass:'activeClass',
  linkExactActiveClass: "activeClass"
})

export default router


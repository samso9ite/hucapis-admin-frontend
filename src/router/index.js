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
    path: '/course-details',
    name: 'CourseDetails',
    component: () => import('../views/CourseDetails.vue')
  },
  {
    path: '/learners',
    name: 'Learners',
    component: () => import('../views/Learners.vue')
  }
 
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router


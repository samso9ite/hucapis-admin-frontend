import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../views/auth/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/auth/Signin.vue'),
    meta: {
      guest: true,
      title: 'Home Page - Hucapis LMS',
      metaTags: [
        {
          name: 'description',
          content: 'Welcome Hucapic Learning Management Platform.'
        },
        {
          property: 'og:description',
          content: 'Welcome Hucapic Learning Management Platform.'
        }
      ]
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      guest: false,
      title: 'Home Page - Hucapis LMS - Dashboard',
      metaTags: [
        {
          name: 'description',
          content: 'Hucapic Learning Management Platform - Dashboard.'
        },
        {
          property: 'og:description',
          content: 'Hucapic Learning Management Platform - Dashboard.'
        }
      ]
    }
  },
  {
    path: '/sign-up',
    name: 'Signup',
    component: Signup,
    meta: {
      guest: false,
      title: 'Sign In - Hucapis LMS',
      metaTags: [
        {
          name: 'description',
          content: 'Hucapic Learning Management Platform - Sign Up.'
        },
        {
          property: 'og:description',
          content: 'Hucapic Learning Management Platform - Sign Up.'
        }
      ]
    }
  },
  {
    path: '/sign-in',
    name: 'Signin',
    component: () => import('../views/auth/Signin.vue'),
    meta: {
      guest: true,
      title: 'Sign In - Hucapis LMS',
      metaTags: [
        {
          name: 'description',
          content: 'Hucapic Learning Management Platform - Sign In.'
        },
        {
          property: 'og:description',
          content: 'Hucapic Learning Management Platform - Sign In.'
        }
      ]
    }
  },
  {
    path: '/forget-password',
    name: 'ForgetPassword',
    component: () => import('../views/auth/ForgetPassword.vue'),
    meta: { guest: true }
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import('../views/auth/ResetPassword.vue'),
    props: route => ({ query: route.query.token & route.query.email }),
    meta: { guest: true }
  },

  {
    path: '/verify',
    name: 'Verification',
    props: route => ({ query: route.query.token & route.query.email }),
    component: () => import('../views/auth/Verify.vue'),
    meta: { guest: true }
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
    component: () => import('../views/Revenue.vue'),
    meta: {
      guest: false,
      title: 'Revenue Page - Hucapis LMS',
      metaTags: [
        {
          name: 'description',
          content: 'Hucapic Learning Management Platform - Revenue Page.'
        },
        {
          property: 'og:description',
          content: 'Hucapic Learning Management Platform - Revenue Page.'
        }
      ]
    }
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('../views/Courses.vue'),
    meta: {
      guest: false,
      title: 'All Courses - Hucapis LMS',
      metaTags: [
        {
          name: 'description',
          content: 'Hucapic Learning Management Platform - All Courses.'
        },
        {
          property: 'og:description',
          content: 'Hucapic Learning Management Platform - All Courses.'
        }
      ]
    }
  },
  {
    path: '/course-edit/:course_id',
    name: 'CourseEdit',
    component: () => import('../views/CourseUpload.vue'),
    props: true,
    meta: {
      guest: false,
      title: 'Upload Course - Hucapis LMS',
      metaTags: [
        {
          name: 'description',
          content: 'Hucapic Learning Management Platform - Upload Course.'
        },
        {
          property: 'og:description',
          content: 'Hucapic Learning Management Platform - Upload Course.'
        }
      ]
    }
  },
  {
    path: '/topic-edit/:course_id/:topic_id',
    name: 'Topic Edit',
    component: () => import('../views/CourseUpload.vue'),
    props: true,
    meta: {
      guest: false,
      title: 'Edit Course Topic - Hucapis LMS',
      metaTags: [
        {
          name: 'description',
          content: 'Hucapic Learning Management Platform - Edit Course Topic.'
        },
        {
          property: 'og:description',
          content: 'Hucapic Learning Management Platform - Edit Course Topic.'
        }
      ]
    }
  },
  {
    path: '/instructors',
    name: 'Instructors',
    component: () => import('../views/Instructors.vue'),
    meta: {
      guest: false,
      title: 'Course Instructors - Hucapis LMS',
      metaTags: [
        {
          name: 'description',
          content: 'Hucapic Learning Management Platform - Course Instructors.'
        },
        {
          property: 'og:description',
          content: 'Hucapic Learning Management Platform - Course Instructors.'
        }
      ]
    }
  },
  {
    path: '/tutors/:id',
    name: 'Tutors',
    component: () => import('../views/Tutors.vue'),
    props: true,
    meta: {
      guest: false,
      title: 'Course Instructor Details - Hucapis LMS',
      metaTags: [
        {
          name: 'description',
          content: 'Hucapic Learning Management Platform - Course Instructor Details.'
        },
        {
          property: 'og:description',
          content: 'Hucapic Learning Management Platform - Course Instructor Details.'
        }
      ]
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'activeClass',
  linkExactActiveClass: "activeClass"
})
// ... 

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

// ...
export default router


/* eslint-disable no-alert */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
// Routes
import { canNavigate } from '@/libs/acl/routeProtection'
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'
// import apps from './routes/apps'
// import dashboard from './routes/dashboard'
// import uiElements from './routes/ui-elements/index'
import pages from './routes/pages'
// import chartsMaps from './routes/charts-maps'
// import formsTable from './routes/forms-tables'
// import others from './routes/others'
import admin from './routes/admin/index'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', redirect: { name: 'admin-category-list' } },
    // ...apps,
    // ...dashboard,
    ...pages,
    // ...chartsMaps,
    // ...formsTable,
    // ...uiElements,
    // ...others,
    ...admin,
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn()
  const userData = getUserData()
  const { isAuthorize } = store.state.common
  // isAuthorize is a state level is loging check
  // isLogin is a local storage level check
  if ((!isLoggedIn || !isAuthorize) && to.name !== 'auth-login') {
    localStorage.removeItem('accessToken')
    alert('Your Token is expired please login again!')
    return next({ name: 'auth-login' })
  }
  if (isLoggedIn && !userData.verifyKey && to.name !== 'verify-email' && to.name !== 'verify-email-confirm') {
    return next({ name: 'verify-email' })
  }

  if (isLoggedIn && userData.verifyKey && to.name === 'verify-email') {
    return next({ name: 'dashboard-analytics' })
  }
  if (!canNavigate(to)) {
    // Redirect to login if not logged in
    if (!isLoggedIn) return next({ name: 'auth-login' })

    // If logged in => not authorized
    return next({ name: 'misc-not-authorized' })
  }

  // Redirect if logged in
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
  }

  return next()
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  const footer = localStorage.getItem('footer_custom_script')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
  if (footer) {
    document.getElementById('footer_custom_script').innerHTML = footer
  }
})

export default router

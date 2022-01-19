import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'
import useJwt from '@/auth/jwt/useJwt'
import { initialAbility } from '@/libs/acl/config'

const helperMixins = {
  methods: {
    toastPrimary(text) {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-alert
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
          text: `👋 ${text}`,
          variant: 'primary',
        },
      })
    },
    toastSecondary(text) {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-alert
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
          text: `👋 ${text}`,
          variant: 'secondary',
        },
      })
    },
    toastSuccess(text) {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-alert
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
          text: `👋 ${text}`,
          variant: 'success',
        },
      })
    },
    toastDanger(text) {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-alert
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
          text: `👋 ${text}`,
          variant: 'danger',
        },
      })
    },
    toastDark(text) {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-alert
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
          text: `👋 ${text}`,
          variant: 'dark',
        },
      })
    },
    toastWarning(text) {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-alert
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
          text: `👋 ${text}`,
          variant: 'warning',
        },
      })
    },
    toastInfo(text) {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-alert
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
          text: `👋 ${text}`,
          variant: 'info',
        },
      })
    },
    // success
    successAlert(text) {
      this.$swal({
        title: 'Good job!',
        text,
        icon: 'success',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // error
    errorAlert(text) {
      this.$swal({
        title: 'Error!',
        text,
        icon: 'error',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // warning
    warningAlert(text) {
      this.$swal({
        title: 'Warning!',
        text,
        icon: 'warning',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // info
    infoAlert(text) {
      this.$swal({
        title: 'Info!',
        text,
        icon: 'info',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },
    previewImageHelper(event, primary) {
      const file = event.target.files[0]
      const imbObj = primary
      imbObj.file = file
      const fileReader = new FileReader()
      fileReader.readAsDataURL(imbObj.file)
      fileReader.addEventListener('load', () => {
        imbObj.src = fileReader.result
      })
    },
    removeImageHelper(fileObject) {
      // eslint-disable-next-line no-param-reassign
      fileObject.file = []
      // eslint-disable-next-line no-param-reassign
      fileObject.src = ''
    },
    convertObjectInfoFormData(dataObj) {
      const data = new FormData()
      Object.keys(dataObj).forEach(key => {
        data.set(key, dataObj[key])
      })
      return data
    },
    chooseFile(imageId) {
      document.getElementById(imageId).click()
    },
    isValidObject(obj) {
      return typeof obj === 'object' && obj !== null
    },
    updateLoader(loader, value) {
      store.commit('common/UPDATE_LOADER', { loader, value })
    },
    getLoader(loader) {
      return store.getters['common/getLoader'](loader)
    },
    // these function are related to product
    isSubmitProductCollapse(name) {
      return store.state.adminProduct.menu[name].submit
    },
    isOpenProductCollapse(name) {
      return store.state.adminProduct.menu[name].open
    },
    updateMenu(name, payload) {
      store.dispatch('adminProduct/updateMenu', { menu: name, open: payload.open, submit: payload.submit })
    },
    convertIntoBoolean(val) {
      return Boolean(val)
    },
    isEmptyObject(val) {
      return Object.keys(val).length > 0
    },
    logout() {
      // Remove userData from localStorage
      // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
      localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName)
      localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName)

      // Remove userData from localStorage
      localStorage.removeItem('userData')

      // Reset ability
      this.$ability.update(initialAbility)

      // Redirect to login page
      this.$router.push({ name: 'auth-login' })
    },
  },
}

export default helperMixins

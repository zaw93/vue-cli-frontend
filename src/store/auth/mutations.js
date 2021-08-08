import axios from 'axios'

export default {
  setUserData(state, payload) {
    state.token = payload.token
    state.user = payload.user

    localStorage.setItem('user', JSON.stringify(payload.user))
    localStorage.setItem('token', JSON.stringify(payload.token))

    axios.defaults.headers.common.Authorization = `Bearer ${payload.token}`
  },

  clearUserData(state) {
    state.token = null
    state.user = null

    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }
}

import axios from 'axios'

export default {
  login({ commit }, credentials) {
    return axios.post('/login', credentials).then(({ data }) => {
      commit('setUserData', data)
    })
  },

  signup({ commit }, credentials) {
    return axios.post('/register', credentials).then(({ data }) => {
      commit('setUserData', data)
    })
  },

  logout({ commit }) {
    return axios.post('/logout').then(() => {
      commit('clearUserData')
    })
  },

  tryLogin({ commit }) {
    const token = JSON.parse(localStorage.getItem('token'))
    const user = JSON.parse(localStorage.getItem('user'))

    if (token && user) {
      commit('setUserData', {
        user: user,
        token: token
      })
    }
  },

  autoLogout(context) {
    context.dispatch('logout')
    context.commit('setAutoLogout')
  },

  updateProfile({ commit }, credentials) {
    return axios.put('/me', credentials).then(({ data }) => {
      commit('updateUserData', data)
    })
  },

  updateProfilePhoto({ commit }, data) {
    return axios.post('/upload-profile-photo', data).then(({data}) => {
      commit('updateUserData', data)
    })
  },

  updatePassword({ commit }, credentials) {
    return axios.put('/update-password', credentials)
  }
}

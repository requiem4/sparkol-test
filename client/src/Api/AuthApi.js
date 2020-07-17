import api from './IndexApi'
export default class AuthApi {
  static login = async (username, password) => {
    return await api.post('/login',{username: username, password: password})
  }
  static logout = async () => {
    return await api.post('/logout')
  }
  static verifyUser = async () => {
    return await api.post('/verifyToken')
  }
  static register = async(user) => {
    return await api.post('/register', {user: user})
  }
  static changePassword = async(user) => {
    return await api.post('/change-password', {user: user})
  }
}

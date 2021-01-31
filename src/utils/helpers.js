import Cookies from 'js-cookie'
import { PostLogout } from '../api'

export const isLoggedIn = () => {
  const isLogin = Cookies.get('user_logged_in')
  return isLogin ? true : false
}

export const userLoggedIn = () => {
  const username = Cookies.get('user_data_username')
  return {
    username: JSON.parse(username),
  }
}

export const userLoggedOut = () => {
  const username = JSON.parse(Cookies.get('user_data_username'))
  const token = JSON.parse(Cookies.get('user_data_token'))
  PostLogout({
    token: token,
    username: username,
  }).then((res) => {
    const { error } = res
    if (!error) {
      Cookies.remove('user_data_username')
      Cookies.remove('user_data_token')
      Cookies.remove('user_logged_in')
      window.location.href = '/'
    }
  })
}

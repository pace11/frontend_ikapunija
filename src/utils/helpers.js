import Cookies from 'js-cookie'

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
  Cookies.remove('user_data_username')
  Cookies.remove('user_logged_in')
  window.location.href = '/'
}

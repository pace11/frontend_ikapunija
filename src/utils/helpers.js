import Cookies from 'js-cookie'
import { PostLogout } from '../api'

export const isLoggedIn = () => {
  const isLogin = Cookies.get('user_logged_in')
  return isLogin ? true : false
}

export const userLoggedIn = () => {
  const email = Cookies.get('user_data_email')
  const id_user = Cookies.get('user_data_id')
  const token = Cookies.get('user_data_token')
  return {
    email: JSON.parse(email),
    id_user: JSON.parse(id_user),
    token: JSON.parse(token),
  }
}

export const userLoggedOut = () => {
  const username = JSON.parse(Cookies.get('user_data_email'))
  const token = JSON.parse(Cookies.get('user_data_token'))
  PostLogout({
    token: token,
    username: username,
  }).then((res) => {
    const { error } = res
    if (!error) {
      Cookies.remove('user_data_email')
      Cookies.remove('user_data_token')
      Cookies.remove('user_data_id')
      Cookies.remove('user_logged_in')
      window.location.href = '/'
    }
  })
}

export const range = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx)
}

export const getBrowser = () => {
  if (
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === '[object SafariRemoteNotification]'
    })(
      !window['safari'] ||
        (typeof safari !== 'undefined' && window['safari'].pushNotification),
    )
  ) {
    return 'safari'
  } else {
    return 'another'
  }
}

export const splitUsername = () => {
  const name = JSON.parse(Cookies.get('user_data_nama'))
  const arr = name.split(' ')
  return arr[0]
}

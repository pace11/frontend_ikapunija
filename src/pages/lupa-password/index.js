import React from 'react'
import Cookies from 'js-cookie'
import { PostLogin } from '../../api'
import { PulseLoader } from 'react-spinners'

export default function LoginSso() {
  const [data, setData] = React.useState({
    email: '',
  })
  const [showMessage, setShowMessage] = React.useState({
    show: false,
    error: false,
    message: '',
  })
  const [isLoading, setIsLoading] = React.useState(false)

  const HandleChange = (val, key) => {
    setData({
      ...data,
      [key]: val,
    })
  }

  const HandleSubmit = () => {
    setIsLoading(true)
    PostLogin(data).then((res) => {
      setShowMessage({
        ...showMessage,
        show: true,
        error: res && res.error,
        message: res && res.message,
      })
      setTimeout(() => {
        setShowMessage({
          ...showMessage,
          show: false,
        })
      }, 2000)
      if (res && !res.error) {
        setIsLoading(res.error)
        setTimeout(() => {
          Cookies.set(
            'user_data_username',
            JSON.stringify(res && res.data.email),
          )
          Cookies.set('user_data_token', JSON.stringify(res && res.data.token))
          Cookies.set('user_logged_in', true)
          window.location.href = '/'
        }, 2000)
      } else {
        setIsLoading(false)
      }
    })
  }

  return (
    <div className="container">
      <div>
        <div className="text-center mb-3">
          <a href="/" className="logo">
            <img
              src={require('../../assets/img/logo-ika-putih.png').default}
              alt="ikapunija logo"
              width="300px"
            />
          </a>
        </div>
        <div className="row">
          <div className="col-lg-5 center p-50 background-white b-r-6">
            {showMessage.show && (
              <div
                role="alert"
                className={`alert ${
                  showMessage.error ? 'alert-danger' : 'alert-info'
                } alert-dismissible`}
              >
                <strong>
                  <i className="fa fa-info-circle"></i> Info!
                </strong>{' '}
                {showMessage.message}
              </div>
            )}
            <h3 className="text-center">LUPA PASSWORD</h3>
            <div className="form-group mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Masukkan email anda ..."
                value={data.email}
                onChange={(e) => HandleChange(e.target.value, 'email')}
              />
            </div>
            <div className="text-left form-group">
              <button
                className="btn btn-block"
                disabled={!data.email || isLoading}
                onClick={() => HandleSubmit()}
              >
                {isLoading ? <PulseLoader size={5} color={`#fff`} /> : `Kirim`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

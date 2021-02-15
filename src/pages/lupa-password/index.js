import React from 'react'
import { useHistory } from 'react-router-dom'
import { ForgotPassword } from '../../api'
import { PulseLoader } from 'react-spinners'

export default function LupaPassword() {
  const history = useHistory()
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
    ForgotPassword(data).then((res) => {
      if (res && !res.error) {
        setIsLoading(res.error)
        history.push({
          pathname: '/verifikasi-password',
          state: { email: data.email },
        })
      } else {
        setIsLoading(false)
        setShowMessage({
          ...showMessage,
          show: true,
          error: true,
          message: res && res.message,
        })
      }
    })
  }

  return (
    <section
      style={{
        backgroundImage: `url(${require('../../assets/img/2.jpg').default})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <div
        style={{
          position: 'fixed',
          backgroundColor: '#27bebe',
          opacity: '0.3',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: '-1',
        }}
      ></div>
      <div className="container">
        <div>
          <div className="text-center mb-3">
            <a href="/" className="logo">
              <img
                className="logo-ikapunija"
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
                  {isLoading ? (
                    <PulseLoader size={5} color={`#fff`} />
                  ) : (
                    `Kirim`
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          @media screen and (min-width: 768px) {
            img.logo-ikapunija {
              width: 380px;
            }
          }
        `}
      </style>
    </section>
  )
}

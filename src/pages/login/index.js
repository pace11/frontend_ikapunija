import React from 'react'
import Cookies from 'js-cookie'
import { useLocation } from 'react-router-dom'
import { PostLogin } from '../../api'
import { PulseLoader } from 'react-spinners'

export default function LoginSso() {
  const location = useLocation()
  const query = new URLSearchParams(location.search)

  const [data, setData] = React.useState({
    email: '',
    password: '',
    mode: 'userWeb',
  })
  const [showMessage, setShowMessage] = React.useState({
    show: false,
    error: false,
    message: '',
  })
  const [showMessage2, setShowMessage2] = React.useState({
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
          Cookies.set('user_data_token', JSON.stringify(res && res.data.token))
          Cookies.set('user_data_id', JSON.stringify(res && res.data.id_user))
          Cookies.set('user_data_email', JSON.stringify(res && res.data.email))
          Cookies.set(
            'user_data_nama',
            JSON.stringify(
              res && res.data.alumni && res.data.alumni.nama_alumni,
            ),
          )
          Cookies.set('user_logged_in', true)
          window.localStorage.setItem(
            'user_data',
            JSON.stringify(res && res.data),
          )
          window.location.href = '/'
        }, 2000)
      } else {
        setIsLoading(false)
      }
    })
  }

  React.useEffect(() => {
    if (query.get('status') === 'success') {
      setShowMessage2({
        ...showMessage2,
        show: true,
        error: false,
        message: `Verifikasi akun berhasil. harap menunggu aktivasi akun dari Admin agar akun dapat digunakan`,
      })
      setTimeout(() => {
        setShowMessage2({
          ...showMessage2,
          show: false,
        })
      }, 5000)
    }
    if (query.get('status') === 'failed') {
      setShowMessage2({
        ...showMessage2,
        show: true,
        error: true,
        message: `<strong><i className="fa fa-info-circle"></i> Info!</strong> Verifikasi akun gagal. informasi lebih lanjut bisa menghubungi Admin melalui <a href="/kontak-kami" style="color:#000;">Kontak Kami</a>`,
      })
      setTimeout(() => {
        setShowMessage2({
          ...showMessage2,
          show: false,
        })
      }, 8000)
    }
  }, [])

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
            {showMessage2.show && (
              <div
                role="alert"
                className={`alert ${
                  showMessage2.error ? 'alert-danger' : 'alert-info'
                } alert-dismissible`}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: showMessage2.message }}
                />
              </div>
            )}
            <h3 className="text-center">LOGIN</h3>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan email anda ..."
                value={data.email}
                onChange={(e) => HandleChange(e.target.value, 'email')}
              />
            </div>
            <div className="form-group mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Masukkan password anda ..."
                value={data.password}
                onChange={(e) => HandleChange(e.target.value, 'password')}
              />
            </div>
            <div className="text-left form-group">
              <button
                className="btn btn-block"
                disabled={!data.email || !data.password || isLoading}
                onClick={() => HandleSubmit()}
              >
                {isLoading ? <PulseLoader size={5} color={`#fff`} /> : `Login`}
              </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span className="small">
                Belum punya akun? <a href={`/register`}>Registrasi Sekarang</a>
              </span>
              <span className="small">
                <a href={`/lupa-password`}>Lupa Password ?</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { VerifikasiPassword, ChangePassword } from '../../api'
import { PulseLoader, BounceLoader } from 'react-spinners'

export default function VerifikasiPasswordContainer(props) {
  const [data, setData] = React.useState({
    email: props.location.state !== undefined ? props.location.state.email : '',
    password: '',
    cPassword: '',
    verify_code: '',
  })
  const [showMessage, setShowMessage] = React.useState({
    show: false,
    error: false,
    message: '',
  })
  const [showMessageS2, setShowMessageS2] = React.useState({
    show: false,
    error: false,
    message: '',
  })
  const [invalidCPassword, setInvalidCPassword] = React.useState(false)
  const [step, setStep] = React.useState(1)
  const [isLoading, setIsLoading] = React.useState(false)
  const [isLoadingS2, setIsLoadingS2] = React.useState(false)

  const HandleChange = (val, key) => {
    setData({
      ...data,
      [key]: val,
    })
  }

  const HandleSubmit = (key) => {
    if (parseInt(key) === 1) {
      setIsLoading(true)
      VerifikasiPassword(data).then((res) => {
        if (res && !res.error) {
          setIsLoading(res.error)
          setStep(2)
          setShowMessage({
            ...showMessage,
            show: false,
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
    } else {
      setIsLoadingS2(true)
      ChangePassword(data).then((res) => {
        if (res && !res.error) {
          setIsLoadingS2(res.error)
          setShowMessageS2({
            ...showMessageS2,
            show: true,
            error: false,
            message: res && res.message,
          })
          setData({
            ...data,
            password: '',
            cPassword: '',
          })
          setTimeout(() => {
            window.location.href = '/login'
          }, 3000)
        } else {
          setIsLoadingS2(false)
          setShowMessageS2({
            ...showMessageS2,
            show: true,
            error: true,
            message: res && res.message,
          })
        }
      })
    }
  }

  const HandleKeyUp = (val) => {
    const { password } = data
    setInvalidCPassword(val === password ? false : true)
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
        {step === 1 ? (
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
                    <i className="fa fa-info-circle"></i>
                  </strong>{' '}
                  {showMessage.message}
                </div>
              )}
              <h3 className="text-center">VERIFIKASI PASSWORD</h3>
              <div className="form-group mb-3">
                <div
                  role="alert"
                  className="alert alert-info alert-dismissible"
                >
                  <strong>
                    <i className="fa fa-info-circle"></i> Info!
                  </strong>{' '}
                  Silahkan masukkan Kode Verifikasi yang telah dikirim melalui
                  email. jika kode expired atau gagal diproses, kembali ke
                  halaman Lupa Password untuk mendapatkan Kode Verifikasi yang
                  baru.
                </div>
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Masukkan email anda ..."
                  value={data.email}
                  onChange={(e) => HandleChange(e.target.value, 'email')}
                />
              </div>
              <div className="form-group mb-3">
                <label>Kode Verifikasi</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Masukkan kode verifikasi anda ..."
                  value={data.verify_code}
                  onChange={(e) => HandleChange(e.target.value, 'verify_code')}
                />
              </div>
              <div className="text-left form-group">
                <button
                  className="btn btn-block"
                  disabled={!data.email || !data.verify_code || isLoading}
                  onClick={() => HandleSubmit(1)}
                >
                  {isLoading ? (
                    <PulseLoader size={5} color={`#fff`} />
                  ) : (
                    `Kirim`
                  )}
                </button>
              </div>
              <p className="small">
                <a href={`/lupa-password`}>Lupa Password ?</a>
              </p>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-5 center p-50 background-white b-r-6">
              {showMessageS2.show && (
                <div>
                  <div
                    role="alert"
                    className={`alert ${
                      showMessageS2.error ? 'alert-danger' : 'alert-info'
                    } alert-dismissible`}
                  >
                    <strong>
                      <i className="fa fa-info-circle"></i>
                    </strong>{' '}
                    {showMessageS2.message}
                  </div>
                  <div>
                    <BounceLoader size={20} color={`#27bebe`} />
                    <p className="text-center">
                      Segera diarahkan ke <a href="/login">Login</a> dalam 3
                      detik
                    </p>
                  </div>
                </div>
              )}
              <h3 className="text-center">PASSWORD BARU</h3>
              <div className="form-group mb-3">
                <label>Password Baru</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Masukkan password baru ..."
                  value={data.password}
                  onChange={(e) => HandleChange(e.target.value, 'password')}
                />
              </div>
              <div className="form-group mb-3">
                <label>Konfirmasi Password Baru</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Masukkan konfirmasi password baru ..."
                  value={data.cPassword}
                  onChange={(e) => HandleChange(e.target.value, 'cPassword')}
                  onKeyUp={(e) => HandleKeyUp(e.target.value)}
                />
                {invalidCPassword && data.cPassword && (
                  <div id="txtName-error" className="is-invalid">
                    Konfirmasi Password harus sama dengan password
                  </div>
                )}
              </div>
              <div className="text-left form-group">
                <button
                  className="btn btn-block"
                  disabled={
                    !data.password ||
                    !data.cPassword ||
                    invalidCPassword ||
                    isLoadingS2
                  }
                  onClick={() => HandleSubmit(2)}
                >
                  {isLoadingS2 ? (
                    <PulseLoader size={5} color={`#fff`} />
                  ) : (
                    `Kirim`
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

import React from 'react'
import Cookies from 'js-cookie'

export default function Login() {
  const [data, setData] = React.useState({
    username: '',
    password: '',
  })

  const [invalid, setInvalid] = React.useState({
    username: false,
    password: false,
  })

  const HandleChange = (value, key) => {
    setData({
      ...data,
      [key]: value,
    })
  }

  const HandleKeyUp = (value, key) => {
    setInvalid({
      ...invalid,
      [key]: value === '' ? true : false,
    })
  }

  const HandleSubmit = () => {
    if (data.username !== '' && data.password !== '') {
      Cookies.set('user_data_username', JSON.stringify(data.username))
      Cookies.set('user_logged_in', true)
      window.location.href = '/'
    }
  }

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="panel ">
              <div className="panel-body">
                <h2>Login</h2>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Enter your username ..."
                    className={`form-control ${
                      invalid.username ? 'is-invalid' : ''
                    }`}
                    value={data.username}
                    onChange={(e) => HandleChange(e.target.value, 'username')}
                    onKeyUp={(e) => HandleKeyUp(e.target.value, 'username')}
                  />
                  {invalid.username && (
                    <div id="txtName-error" className="is-invalid">
                      This field is required.
                    </div>
                  )}
                </div>
                <div className="form-group m-b-5">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password ..."
                    className={`form-control ${
                      invalid.password ? 'is-invalid' : ''
                    }`}
                    value={data.password}
                    onChange={(e) => HandleChange(e.target.value, 'password')}
                    onKeyUp={(e) => HandleKeyUp(e.target.value, 'password')}
                  />
                  {invalid.password && (
                    <div id="txtName-error" className="is-invalid">
                      This field is required.
                    </div>
                  )}
                </div>
                <div className="form-group form-inline m-b-10 ">
                  <p className="small">
                    <a href="/#">Lupa Kata Sandi</a>
                  </p>
                </div>
                <div className="form-group">
                  <button
                    className="btn"
                    type="button"
                    onClick={() => HandleSubmit()}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
            <p className="small">
              Belum punya akun? <a href={`/register`}>Registrasi Sekarang</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

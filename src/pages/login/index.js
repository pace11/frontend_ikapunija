import React from 'react'

export default function LoginSso() {
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
            <h3 className="text-center">LOGIN</h3>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan Username ..."
              />
            </div>
            <div className="form-group mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Masukkan Password ..."
              />
            </div>
            <div className="text-left form-group">
              <button className="btn btn-block">Login</button>
            </div>
            <p className="small">
              Belum punya akun? <a href={`/register`}>Registrasi Sekarang</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

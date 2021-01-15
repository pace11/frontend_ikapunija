import React from 'react'
import Layout from '../../layout'

export default function Login() {
  return (
    <Layout>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-4">
              <div className="panel ">
                <div className="panel-body">
                  <h2>Login</h2>
                  <div className="form-group">
                    <label className="sr-only">Username or Email</label>
                    <input
                      type="text"
                      placeholder="Username"
                      className="form-control"
                    />
                    {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                  </div>
                  <div className="form-group m-b-5">
                    <label className="sr-only">Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                    />
                    {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
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
                      onClick={() => console.log('on click button')}
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
    </Layout>
  )
}

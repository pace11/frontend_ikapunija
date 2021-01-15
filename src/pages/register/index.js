import React from 'react'
import Layout from '../../layout'

export default function Register() {
  return (
    <Layout>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="panel ">
                <div className="panel-body">
                  <h2>Registrasi Akun</h2>
                  <div className="form-group">
                    <label className="sr-only">Nama User</label>
                    <input
                      type="text"
                      placeholder="Nama User"
                      className="form-control"
                    />
                    {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Email</label>
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-control"
                    />
                    {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                  </div>
                  <div className="form-group">
                    <label className="sr-only">No Hp</label>
                    <input
                      type="text"
                      placeholder="No Hp"
                      className="form-control"
                    />
                    {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Alamat</label>
                    <textarea
                      type="text"
                      placeholder="Alamat"
                      className="form-control"
                    />
                    {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Angkatan</label>
                    <input
                      type="text"
                      placeholder="Angkatan"
                      className="form-control"
                    />
                    {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Jurusan</label>
                    <input
                      type="text"
                      placeholder="Jurusan"
                      className="form-control"
                    />
                    {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Program Studi</label>
                    <input
                      type="text"
                      placeholder="Program Studi"
                      className="form-control"
                    />
                    {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Kebangsaan</label>
                    <input
                      type="text"
                      placeholder="Kebangsaan"
                      className="form-control"
                    />
                    {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Hobi</label>
                    <input
                      type="text"
                      placeholder="Hobi"
                      className="form-control"
                    />
                    {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Profesi</label>
                    <input
                      type="text"
                      placeholder="Profesi"
                      className="form-control"
                    />
                    {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Jabatan</label>
                    <input
                      type="text"
                      placeholder="Jabatan"
                      className="form-control"
                    />
                    {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Nama Perusahaan/Bisnis</label>
                    <input
                      type="text"
                      placeholder="Nama Perusahaan/Bisnis"
                      className="form-control"
                    />
                    {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                  </div>
                  <div className="form-group">
                    <label className="sr-only">
                      Jumlah Karyawan yang dimiliki
                    </label>
                    <input
                      type="text"
                      placeholder="Jumlah Karyawan yang dimiliki"
                      className="form-control"
                    />
                    {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Pendapatan</label>
                    <input
                      type="text"
                      placeholder="Pendapatan"
                      className="form-control"
                    />
                    {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Upload Foto KTP</label>
                    <input
                      type="file"
                      placeholder="Upload Foto KTP"
                      className="form-control"
                    />
                    {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                  </div>
                  <div className="form-group">
                    <button
                      className="btn"
                      type="button"
                      onClick={() => console.log('on click button')}
                    >
                      Registrasi
                    </button>
                  </div>
                </div>
              </div>
              <p className="small">
                Sudah punya akun? <a href={`/login`}>Login Sekarang</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

import React from 'react'

export default function Register() {
  const [listRegion, setListRegion] = React.useState()

  React.useEffect(() => {
    async function fetchListRegion() {
      const response = await fetch('https://restcountries.eu/rest/v2/all')
      const result = await response.json()
      if (response.status === 200) {
        setListRegion(result)
      }
    }
    fetchListRegion()
  }, [])

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="panel ">
              <div className="panel-body">
                <h2>Registrasi Akun</h2>
                <div className="form-group">
                  <label>Nama User</label>
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
                  <label>Email</label>
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
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                  />
                  {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                </div>
                <div className="form-group">
                  <label>Konfirm Password</label>
                  <input
                    type="password"
                    placeholder="Konfirm Password"
                    className="form-control"
                  />
                  {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                </div>
                <div className="form-group">
                  <label>No Hp</label>
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
                  <label>Alamat</label>
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
                  <label>Angkatan</label>
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
                  <label>Jurusan</label>
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
                  <label>Program Studi</label>
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
                  <label>Kebangsaan</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    {listRegion &&
                      listRegion.map((item, idx) => (
                        <option key={String(idx)}>{item.name}</option>
                      ))}
                  </select>
                  {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                </div>
                <div className="form-group">
                  <label>Hobi</label>
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
                  <label>Profesi</label>
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
                  <label>Jabatan</label>
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
                  <label>Nama Perusahaan/Bisnis</label>
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
                  <label>Jumlah Karyawan yang dimiliki</label>
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
                  <label>Pendapatan</label>
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
                  <label>Upload Foto KTP</label>
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
  )
}

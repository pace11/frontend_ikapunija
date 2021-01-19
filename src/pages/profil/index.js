import React from 'react'
// import { userLoggedIn } from '../../utils/helpers'

export default function Profil() {
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
    <React.Fragment>
      <section id="page-title">
        <div className="container">
          <div className="page-title">
            <h1>Profil</h1>
          </div>
          <div className="breadcrumb">
            <ul>
              <li>
                <a href="/">Beranda</a>
              </li>
              <li className="active">
                <a href="/struktur-dpa">Profilku</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="page-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="content col-md-11">
              <div className="card">
                <div className="card-body">
                  <form id="wizard1" className="wizard">
                    <h3>Informasi Akun</h3>
                    <div className="wizard-content">
                      <div className="h5 mb-4">
                        {/* Please fill with your account details */}
                      </div>
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
                          Update
                        </button>
                      </div>
                    </div>
                    <h3>Job Applied</h3>
                    <div className="wizard-content">
                      <div className="content col-lg-12 col-md-12">
                        <h4>List Job Applied</h4>
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Title</th>
                              <th scope="col">Tanggal</th>
                              <th scope="col">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr> */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

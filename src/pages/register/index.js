import React from 'react'
import { ListRegion, ListProfesi } from '../../api'
import ImageProfile from './image-profile'

export default function LoginSso() {
  const [listRegion, setListRegion] = React.useState()
  const [profesi, setProfesi] = React.useState()
  const [data, setData] = React.useState({
    img_url: '',
  })
  const [isShow, setIsShow] = React.useState({
    form1: false,
    form2: false,
  })

  React.useEffect(() => {
    // fetch data region
    ListRegion().then((res) => {
      setListRegion(res)
    })
    // fetch data profesi
    ListProfesi().then((res) => {
      setProfesi(res && res.Data)
    })
  }, [])

  const HandleChangeProfesi = (val) => {
    if (parseInt(val) === 1) {
      setIsShow({
        ...isShow,
        form1: true,
        form2: false,
      })
    } else {
      setIsShow({
        ...isShow,
        form1: false,
        form2: true,
      })
    }
  }

  const HandleChangeImage = (e) => {
    const file_reader = new FileReader(),
      file_image = e.target.files[0]

    if (file_image.size > 1000000) {
      alert('image file is too large > 10 Mb')
    } else {
      if (file_image && file_image.type.match('image.*')) {
        file_reader.readAsDataURL(file_image)
        file_reader.onloadend = () => {
          setData({
            ...data,
            img_url: file_reader.result,
          })
        }
      }
    }
  }

  const HandleRemoveImage = () => {
    setData({
      ...data,
      img_url: '',
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
          <div className="col-lg-7 col-md-7 col-xs-12 center p-50 background-white b-r-6">
            <div className="panel ">
              <div className="panel-body">
                <h2 className="text-center">REGISTRASI</h2>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Nama User <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Nama User ..."
                        className="form-control"
                      />
                      {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                    </div>
                    <div className="form-group">
                      <label>
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Email ..."
                        className="form-control"
                      />
                      {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="form-group"
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <label>
                        Foto Profil <span className="text-danger">*</span>
                      </label>
                      <ImageProfile
                        imageUrl={data && data.img_url}
                        onChange={(e) => HandleChangeImage(e)}
                      />
                      {data && data.img_url && (
                        <button
                          className="btn btn-youtube btn-xs"
                          style={{
                            position: 'absolute',
                            bottom: 10,
                            zIndex: 999,
                          }}
                          onClick={() => HandleRemoveImage()}
                        >
                          <i className="icon-trash"></i>
                          hapus
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Password ..."
                        className="form-control"
                      />
                      {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Konfirmasi Password{' '}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Konfirmasi password ..."
                        className="form-control"
                      />
                      {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>
                        Alamat <span className="text-danger">*</span>
                      </label>
                      <textarea
                        type="text"
                        placeholder="Alamat ..."
                        className="form-control"
                      />
                      {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        No Hp <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="No Hp ..."
                        className="form-control"
                      />
                      {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Angkatan <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Angkatan ..."
                        className="form-control"
                      />
                      {/* <div id="txtName-error" className="is-invalid">
                            This field is required.
                          </div> */}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Jurusan <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Jurusan"
                        className="form-control"
                      />
                      {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Program Studi <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Program Studi"
                        className="form-control"
                      />
                      {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Kebangsaan <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option style={{ display: 'none' }}>
                          -- pilih salah satu --
                        </option>
                        {listRegion &&
                          listRegion.map((item, idx) => (
                            <option key={String(idx)}>{item.name}</option>
                          ))}
                      </select>
                      {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Hobi <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Hobi"
                        className="form-control"
                      />
                      {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Profesi <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        onChange={(e) => HandleChangeProfesi(e.target.value)}
                      >
                        <option style={{ display: 'none' }}>
                          -- pilih salah satu --
                        </option>
                        {profesi &&
                          profesi.map((item, idx) => (
                            <option key={String(idx)} value={item.id}>
                              {item.nama_profesi}
                            </option>
                          ))}
                      </select>
                      {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    {isShow.form1 && (
                      <div className="form show">
                        <div className="form-group">
                          <label>
                            Nama Perusahaan/Bisnis{' '}
                            <span className="text-danger">*</span>
                          </label>
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
                          <label>
                            Jumlah Karyawan yang dimiliki{' '}
                            <span className="text-danger">*</span>
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
                          <label>
                            Pendapatan <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Pendapatan"
                            className="form-control"
                          />
                          {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                        </div>
                      </div>
                    )}
                    {isShow.form2 && (
                      <div className="form show">
                        <div className="form-group">
                          <label>
                            Jabatan <span className="text-danger">*</span>
                          </label>
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
                          <label>
                            Pendapatan <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Pendapatan"
                            className="form-control"
                          />
                          {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>
                        Upload Foto KTP <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        placeholder="Upload Foto KTP"
                        className="form-control"
                      />
                      {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-block"
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
      <style>
        {`
          .form.show {
            -webkit-animation-name: animatezoom;
            -webkit-animation-duration: 0.4s;
            animation-name: animatezoom;
            animation-duration: 0.4s;
          }
          @keyframes animatezoom {
            from {
              transform: scale(0.5);
            }
            to {
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  )
}

import React from 'react'
import {
  ListRegion,
  ListProfesi,
  ListJurusan,
  ListProdi,
  PutUpdateDataProfile,
  GetProfileMe,
} from '../../api'
import { range, userLoggedOut } from '../../utils/helpers'
import { PulseLoader, BounceLoader } from 'react-spinners'
import ImageProfile from './image-profile'
import LoadingComponent from './loading-component'

export default function EditProfile() {
  const [listRegion, setListRegion] = React.useState()
  const [profesi, setProfesi] = React.useState()
  const [jurusan, setJurusan] = React.useState()
  const [prodi, setProdi] = React.useState()
  const [validNumber, setValidNumber] = React.useState({
    contact: false,
    nik: false,
  })
  const [confirmPassword, setConfirmPassword] = React.useState({
    error: false,
    value: '',
  })
  const [data, setData] = React.useState()
  const [isShow, setIsShow] = React.useState({
    form1: false,
    form2: false,
  })
  const [isLoading, setIsLoading] = React.useState(false)
  const [isLoadingProdi, setIsLoadingProdi] = React.useState(false)
  const [showMessage, setShowMessage] = React.useState({
    show: false,
    error: false,
    message: '',
  })

  React.useEffect(() => {
    async function fetchUserData() {
      ListRegion().then((res) => {
        setListRegion(res)
      })
      ListProfesi().then((res) => {
        setProfesi(res && res.Data)
      })
      ListJurusan().then((res) => {
        setJurusan(res && res.Data)
      })
      await GetProfileMe().then((res) => {
        if (res && res.data) {
          setData(res.data)
          setValidNumber({
            contact: true,
            nik: true,
          })
          ListProdi(res.data.jurusan_id).then((res) => {
            setProdi(res && res.Data)
          })
        }
      })
    }
    fetchUserData()
  }, [])

  const HandleChangeProfesi = (val, key) => {
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
    setData({
      ...data,
      [key]: val,
    })
  }

  const HandleChangeImage = (e) => {
    const file_reader = new FileReader(),
      file_image = e.target.files[0]

    if (file_image.size > 1000000) {
      alert('ukuran file gambar > 1 Mb')
    } else {
      if (file_image && file_image.type.match('image.*')) {
        file_reader.readAsDataURL(file_image)
        file_reader.onloadend = () => {
          setData({
            ...data,
            foto_profil: file_reader.result,
          })
        }
      }
    }
  }

  const HandleRemoveImage = () => {
    setData({
      ...data,
      foto_profil: '',
    })
  }

  const HandleSelect = (val, key) => {
    if (key === 'jurusan_id') {
      setIsLoadingProdi(true)
      ListProdi(val).then((res) => {
        setIsLoadingProdi(false)
        setProdi(res && res.Data)
        setData({
          ...data,
          jurusan_id: val,
          prodi_id: res && String(res.Data[0].id),
        })
      })
    } else {
      setData({
        ...data,
        [key]: val,
      })
    }
  }

  const HandleChange = (val, key) => {
    setData({
      ...data,
      [key]: val,
    })
  }

  const HandleChangeConfirmPass = (val) => {
    const { password } = data
    setConfirmPassword({
      ...confirmPassword,
      error: val !== password || !val ? true : false,
      value: val,
    })
  }

  const HandleChangeFileKtp = (e) => {
    const file_reader = new FileReader(),
      file_ktp = e.target.files[0]

    if (file_ktp.size > 1000000) {
      alert('ukuran file gambar > 1 Mb')
    } else {
      if (file_ktp && file_ktp.type.match('image.*')) {
        file_reader.readAsDataURL(file_ktp)
        file_reader.onloadend = () => {
          setData({
            ...data,
            foto_ktp: file_reader.result,
          })
        }
      }
    }
  }

  const HandleSubmit = () => {
    window.scrollTo(0, 0)
    setIsLoading(true)
    PutUpdateDataProfile({ ...data, mode: 'user' }).then((res) => {
      if (res && !res.error) {
        setIsLoading(res.error)
        setShowMessage({
          ...showMessage,
          show: true,
          error: false,
          message: res && res.message,
        })
        setTimeout(() => {
          setShowMessage({
            ...showMessage,
            show: false,
          })
          userLoggedOut()
        }, 4000)
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

  const HandleKeyUp = (val, key) => {
    if (key === 'nik') {
      val.match(/^[0-9]{16,16}$/)
        ? setValidNumber({ ...validNumber, [key]: true })
        : setValidNumber({ ...validNumber, [key]: false })
    } else {
      val.match(/^[0-9]{8,14}$/)
        ? setValidNumber({ ...validNumber, [key]: true })
        : setValidNumber({ ...validNumber, [key]: false })
    }
  }

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
              <li>
                <a href="/profil">Profilku</a>
              </li>
              <li className="active">
                <a href="/profil/edit">Edit</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="page-content">
        <div className="container">
          <div>
            {!data ? (
              <LoadingComponent />
            ) : (
              <div className="row">
                <div className="col-lg-7 col-md-7 col-xs-12 center p-50 background-white b-r-6">
                  <div className="panel">
                    <div className="panel-body">
                      {showMessage.show && (
                        <React.Fragment>
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
                          <div>
                            <BounceLoader size={20} color={`#27bebe`} />
                            <p className="text-center">
                              Akun akan Logout otomatis dalam 4 detik
                            </p>
                          </div>
                        </React.Fragment>
                      )}
                      <div className="row">
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
                              Foto Profil{' '}
                              <span className="text-danger txt-sm">
                                *required
                              </span>
                            </label>
                            <ImageProfile
                              imageUrl={data && data.foto_profil}
                              onChange={(e) => HandleChangeImage(e)}
                            />
                            {data && data.foto_profil && (
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
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              Nama Alumni{' '}
                              <span className="text-danger txt-sm">
                                *required
                              </span>
                            </label>
                            <input
                              value={data.nama_alumni}
                              onChange={(e) =>
                                HandleChange(e.target.value, 'nama_alumni')
                              }
                              type="text"
                              placeholder="Masukkan nama alumni ..."
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
                              Password{' '}
                              <span className="text-danger txt-sm">
                                *required
                              </span>
                            </label>
                            <input
                              value={data.password}
                              onChange={(e) =>
                                HandleChange(e.target.value, 'password')
                              }
                              type="password"
                              placeholder="Masukkan password ..."
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
                              <span className="text-danger txt-sm">
                                *required
                              </span>
                            </label>
                            <input
                              onChange={(e) =>
                                HandleChangeConfirmPass(e.target.value)
                              }
                              value={confirmPassword.value}
                              type="password"
                              placeholder="Masukkan konfirmasi password ..."
                              className="form-control"
                            />
                            {confirmPassword.error && (
                              <div className="is-invalid">
                                Konfirmasi password harus sama dengan password
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>
                              Alamat{' '}
                              <span className="text-danger txt-sm">
                                *required
                              </span>
                            </label>
                            <textarea
                              type="text"
                              placeholder="Masukkan alamat ktp/domisili ..."
                              className="form-control"
                              onChange={(e) =>
                                HandleChange(e.target.value, 'alamat')
                              }
                              value={data.alamat}
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
                              No Hp{' '}
                              <span className="text-danger txt-sm">
                                *required
                              </span>
                            </label>
                            <input
                              value={data.contact}
                              onChange={(e) =>
                                HandleChange(e.target.value, 'contact')
                              }
                              onKeyUp={(e) =>
                                HandleKeyUp(e.target.value, 'contact')
                              }
                              type="text"
                              placeholder="Masukkan no hp ..."
                              className="form-control"
                            />
                            {!validNumber.contact && data.contact && (
                              <div id="txtName-error" className="is-invalid">
                                Harus number dengan jumlah antara 8-14 digit
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              Angkatan{' '}
                              <span className="text-danger txt-sm">
                                *required
                              </span>
                            </label>
                            <select
                              className="form-control"
                              id="exampleFormControlSelect6"
                              onChange={(e) =>
                                HandleSelect(e.target.value, 'angkatan')
                              }
                              value={data.angkatan}
                            >
                              <option style={{ display: 'none' }}>
                                -- pilih salah satu --
                              </option>
                              {range(1980, new Date().getFullYear()).map(
                                (item, idx) => (
                                  <option key={String(idx)} value={item}>
                                    {item}
                                  </option>
                                ),
                              )}
                            </select>
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
                              Jurusan{' '}
                              <span className="text-danger txt-sm">
                                *required
                              </span>
                            </label>
                            <select
                              className="form-control"
                              id="exampleFormControlSelect4"
                              onChange={(e) =>
                                HandleSelect(e.target.value, 'jurusan_id')
                              }
                              value={data.jurusan_id}
                            >
                              <option style={{ display: 'none' }}>
                                -- pilih salah satu --
                              </option>
                              {jurusan &&
                                jurusan.map((item, idx) => (
                                  <option key={String(idx)} value={item.id}>
                                    {item.nama_jurusan}
                                  </option>
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
                              Program Studi{' '}
                              <span className="text-danger txt-sm">
                                *required
                              </span>
                            </label>
                            {isLoadingProdi && (
                              <div>
                                <PulseLoader size={10} color={`#27bebe`} />
                              </div>
                            )}
                            {prodi && !isLoadingProdi && (
                              <select
                                className="form-control"
                                id="exampleFormControlSelect1"
                                onChange={(e) =>
                                  HandleSelect(e.target.value, 'prodi_id')
                                }
                                value={data.prodi_id}
                              >
                                <option style={{ display: 'none' }}>
                                  -- pilih salah satu --
                                </option>
                                {prodi &&
                                  prodi.map((item, idx) => (
                                    <option key={String(idx)} value={item.id}>
                                      {item.nama_prodi}
                                    </option>
                                  ))}
                              </select>
                            )}

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
                              Kebangsaan{' '}
                              <span className="text-danger txt-sm">
                                *required
                              </span>
                            </label>
                            <select
                              className="form-control"
                              id="exampleFormControlSelect2"
                              onChange={(e) =>
                                HandleSelect(e.target.value, 'negara_id')
                              }
                              value={data.negara_id}
                            >
                              <option style={{ display: 'none' }}>
                                -- pilih salah satu --
                              </option>
                              {listRegion &&
                                listRegion.map((item, idx) => (
                                  <option
                                    key={String(idx)}
                                    value={item.alpha2Code}
                                  >
                                    {item.name}
                                  </option>
                                ))}
                            </select>
                            {/* <div id="txtName-error" className="is-invalid">
                        This field is required.
                      </div> */}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Hobi</label>
                            <input
                              value={data.hobi}
                              onChange={(e) =>
                                HandleChange(e.target.value, 'hobi')
                              }
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
                              Profesi{' '}
                              <span className="text-danger txt-sm">
                                *required
                              </span>
                            </label>
                            <select
                              className="form-control"
                              id="exampleFormControlSelect3"
                              onChange={(e) =>
                                HandleChangeProfesi(
                                  e.target.value,
                                  'profesi_id',
                                )
                              }
                              value={data.profesi_id}
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
                                  <span className="text-danger txt-sm">
                                    *required
                                  </span>
                                </label>
                                <input
                                  value={data.nama_profesi}
                                  onChange={(e) =>
                                    HandleChange(e.target.value, 'nama_profesi')
                                  }
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
                                  <span className="text-danger txt-sm">
                                    *required
                                  </span>
                                </label>
                                <input
                                  value={data.jumlah_pegawai}
                                  onChange={(e) =>
                                    HandleChange(
                                      e.target.value,
                                      'jumlah_pegawai',
                                    )
                                  }
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
                                  Pendapatan{' '}
                                  <span className="text-danger txt-sm">
                                    *required
                                  </span>
                                </label>
                                <input
                                  value={data.pendapatan}
                                  onChange={(e) =>
                                    HandleChange(e.target.value, 'pendapatan')
                                  }
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
                                  Jabatan{' '}
                                  <span className="text-danger txt-sm">
                                    *required
                                  </span>
                                </label>
                                <input
                                  value={data.nama_profesi}
                                  onChange={(e) =>
                                    HandleChange(e.target.value, 'nama_profesi')
                                  }
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
                                  Pendapatan{' '}
                                  <span className="text-danger txt-sm">
                                    *required
                                  </span>
                                </label>
                                <input
                                  value={data.pendapatan}
                                  onChange={(e) =>
                                    HandleChange(e.target.value, 'pendapatan')
                                  }
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
                              NIK{' '}
                              <span className="text-danger txt-sm">
                                *required
                              </span>
                            </label>
                            <input
                              value={data.nik}
                              onChange={(e) =>
                                HandleChange(e.target.value, 'nik')
                              }
                              onKeyUp={(e) =>
                                HandleKeyUp(e.target.value, 'nik')
                              }
                              type="text"
                              placeholder="Masukkan 16 digit NIK ..."
                              className="form-control"
                            />
                            {!validNumber.nik && data.nik && (
                              <div id="txtName-error" className="is-invalid">
                                Harus number dengan jumlah 16 digit
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>
                              Upload Foto KTP{' '}
                              <span className="text-danger txt-sm">
                                *required
                              </span>
                            </label>
                            <input
                              onChange={(e) => HandleChangeFileKtp(e)}
                              type="file"
                              accept="image/*"
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
                          onClick={() => HandleSubmit()}
                          disabled={
                            !data.email ||
                            !data.nama_alumni ||
                            !data.password ||
                            !data.contact ||
                            !data.alamat ||
                            !data.angkatan ||
                            !data.negara_id ||
                            !data.profesi_id ||
                            !data.nama_profesi ||
                            !data.jumlah_pegawai ||
                            !data.pendapatan ||
                            !data.foto_ktp ||
                            !data.foto_profil ||
                            !data.nik ||
                            !data.jurusan_id ||
                            !data.prodi_id ||
                            confirmPassword.error ||
                            !validNumber.nik ||
                            !validNumber.contact ||
                            isLoading
                          }
                        >
                          {isLoading ? (
                            <PulseLoader size={5} color={`#fff`} />
                          ) : (
                            `Update Data`
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
          .txt-sm {
            font-size: 10px;
          }
        `}
        </style>
      </section>
    </React.Fragment>
  )
}

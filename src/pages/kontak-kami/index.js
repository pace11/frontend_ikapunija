import React from 'react'
import { PostKontakKami } from '../../api'
import { PulseLoader } from 'react-spinners'

export default function KontakKami() {
  const [data, setData] = React.useState({
    email: '',
    nama: '',
    judul: '',
    pesan: '',
  })
  const [isLoading, setIsLoading] = React.useState(false)
  const [showMessage, setShowMessage] = React.useState({
    show: false,
    error: false,
    message: '',
  })

  const HandleSubmit = () => {
    setIsLoading(true)
    PostKontakKami(data).then((res) => {
      setIsLoading(false)
      const { message, error } = res
      if (!error) {
        setShowMessage({
          ...showMessage,
          show: true,
          error: false,
          message: message,
        })
        setTimeout(() => {
          setShowMessage({
            ...showMessage,
            show: false,
          })
        }, 4000)
      } else {
        setShowMessage({
          ...showMessage,
          show: true,
          error: true,
          message: message,
        })
        setTimeout(() => {
          setShowMessage({
            ...showMessage,
            show: false,
          })
        }, 4000)
      }
    })
  }

  const HandleChange = (val, key) => {
    setData({
      ...data,
      [key]: val,
    })
  }

  return (
    <React.Fragment>
      <section
        id="page-title"
        data-bg-parallax={require('../../assets/img/5.jpg').default}
      >
        <div className="container">
          <div className="page-title">
            <h1>
              <i class="fas fa-phone"></i> Kontak Kami
            </h1>
          </div>
          <div className="breadcrumb">
            <ul>
              <li>
                <a href="/">Beranda</a>
              </li>
              <li className="active">
                <a href="/kontak-kami">
                  <i class="fas fa-phone"></i> Kontak Kami
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="text-uppercase">Get In Touch</h3>
              <p>
                Silahkan berdiskusi dan mengirimkan pertanyaan kepada kita
                melalui form dibawah ini.
              </p>
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
              <div className="m-t-30">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Nama</label>
                    <input
                      onChange={(e) => HandleChange(e.target.value, 'nama')}
                      value={data.nama}
                      type="text"
                      className="form-control"
                      placeholder="Isikan nama anda ..."
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={(e) => HandleChange(e.target.value, 'email')}
                      value={data.email}
                      type="email"
                      className="form-control"
                      placeholder="Isikan email anda ..."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <label htmlFor="subject">Subjek</label>
                    <input
                      onChange={(e) => HandleChange(e.target.value, 'judul')}
                      value={data.judul}
                      type="text"
                      className="form-control"
                      placeholder="Isikan subjek ..."
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Pesan</label>
                  <textarea
                    onChange={(e) => HandleChange(e.target.value, 'pesan')}
                    value={data.pesan}
                    type="text"
                    rows="5"
                    className="form-control"
                    placeholder="Isikan pesan anda ..."
                  ></textarea>
                </div>
                <button
                  className="btn"
                  disabled={
                    !data.pesan ||
                    !data.judul ||
                    !data.email ||
                    !data.nama ||
                    isLoading
                  }
                  onClick={() => HandleSubmit()}
                >
                  {isLoading ? (
                    <PulseLoader size={5} color={`#fff`} />
                  ) : (
                    `Kirim Pesan`
                  )}
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="text-uppercase">Email & Alamat</h3>
              <div className="row">
                <div className="col-lg-6">
                  <address>
                    <i className="icon-mail"></i> ikapunija.2020@gmail.com
                  </address>
                </div>
                <div className="col-lg-6">
                  <address>
                    <i className="icon-map-pin"></i> Jl. Prof. DR. G.A.
                    Siwabessy, Kukusan, Kecamatan Beji, Kota Depok, Jawa Barat
                    16424
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

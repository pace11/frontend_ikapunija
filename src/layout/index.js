import React from 'react'
import { useLocation } from 'react-router-dom'
// import Header from "./header"

export default function Layout({ children }) {
  const url = useLocation()

  return (
    <div className="container-xxl bg-white p-0">
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: '3rem', height: '3rem' }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-hand-holding me-3"></i>YBM Brillian
            </h1>
            {/* <img src="img/logo.png" alt="Logo"> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
              <a href="/" className="nav-item nav-link active">
                Home
              </a>
              <a href="/about-us" className="nav-item nav-link">
                About Us
              </a>
              <a href="/program" className="nav-item nav-link">
                Program
              </a>
              <a href="/news" className="nav-item nav-link">
                News
              </a>
              <a href="/blog" className="nav-item nav-link">
                Blog
              </a>
            </div>
            <a href="#a" className="btn btn-primary py-2 px-4">
              CMS Login
            </a>
          </div>
        </nav>
        {url?.pathname !== '/' ? (
          <div className="container-xxl py-5 bg-dark hero-bread mb-5">
            <div className="container text-center my-5 pt-5 pb-4">
              <h1 className="display-3 text-white mb-3 animated slideInDown" style={{ textTransform: "capitalize"}}>
                {url?.pathname.replace(/[/-]/g, " ")}
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center text-uppercase">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    {url?.pathname.replace(/[/-]/g, " ")}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        ) : (
          <div className="container-xxl py-5 bg-dark hero-header">
            <div className="container my-5 py-5">
              <div className="row align-items-center g-5">
                <div className="col-lg-6 text-center text-lg-start">
                  <h1 className="display-3 animated slideInLeft">YBM Brillian</h1>
                  <p className="animated slideInLeft mb-4 pb-2">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </p>
                </div>
                <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                  <img
                    className="img-fluid"
                    src={require('../assets/image/photo-1.jpg').default}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {children}

      {/* Footer */}
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-4 text-center">
              <img
                src={require('../assets/image/logo.png').default}
                alt="logo-ybm"
                width={150}
              />
              <p>
                YBM BRI yang kini bertransformasi menjadi YBM BRILiaN merupakan
                Lembaga Filantropi Islam yang mengelola dana zakat, infak dan
                sedekah secara profesional dan sesuai dengan ketentuan syariat
                Islam.
              </p>
              <p>
                Gedung Olahraga BRI Lt.2 Jl. Jenderal Sudirman Kav 44-46 Jakarta
                Pusat 10210
              </p>
              <p>customer care 0811 808 412</p>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="row">
                <div className="col-md-3 col-lg-3">
                  <p>
                    <strong>Program</strong>
                  </p>
                  <a href="#a" className="btn btn-link">
                    Pendidikan
                  </a>
                  <a href="#a" className="btn btn-link">
                    Sosial
                  </a>
                  <a href="#a" className="btn btn-link">
                    Ekonomi
                  </a>
                </div>
                <div className="col-md-3 col-lg-3">
                  <p>
                    <strong>Program</strong>
                  </p>
                  <a href="#a" className="btn btn-link">
                    Jadilah Fundraiser
                  </a>
                </div>
                <div className="col-md-3 col-lg-3">
                  <p>
                    <strong>Tentang Kami</strong>
                  </p>
                  <a href="#a" className="btn btn-link">
                    Lembaga
                  </a>
                  <a href="#a" className="btn btn-link">
                    Berita
                  </a>
                  <a href="#a" className="btn btn-link">
                    Artikel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

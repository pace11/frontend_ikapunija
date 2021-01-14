import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Navbar() {
  let location = useLocation()

  return (
    <React.Fragment>
      <header
        id="header"
        className="dark submenu-light"
        data-transparent="true"
        data-fullwidth="true"
      >
        <div className="header-inner">
          <div className="container">
            <div id="logo">
              <a href={`/`}>
                <span className="logo-default">IKAPUNIJA</span>
                <span className="logo-dark">IKAPUNIJA</span>
              </a>
            </div>
            <div id="search">
              <a
                id="btn-search-close"
                className="btn-search-close"
                aria-labelledby="Close search form"
                href="/#"
              >
                <i className="icon-x"></i>
              </a>
              <form
                className="search-form"
                action="search-results-page.html"
                method="get"
              >
                <input
                  className="form-control"
                  name="q"
                  type="text"
                  placeholder="Type & Search..."
                />
                <span className="text-muted">
                  Start typing & press "Enter" or "ESC" to close
                </span>
              </form>
            </div>
            <div className="header-extras">
              <ul>
                <li>
                  <a id="btn-search" href="/#">
                    <i className="icon-search"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div id="mainMenu-trigger">
              <a className="lines-button x" href="/#">
                <span className="lines"></span>
              </a>
            </div>
            <div id="mainMenu">
              <div className="container">
                <nav>
                  <ul>
                    <li className="dropdown">
                      <a href={false}>Tentang Kami</a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href={`/struktur-ikapunija`}>Struktur IKAPUNIJA</a>
                        </li>
                        <li>
                          <a href={`/struktur-dpa`}>Sktruktur DPA</a>
                        </li>
                        <li>
                          <a href={`/visi-misi`}>Visi dan Misi</a>
                        </li>
                        <li>
                          <a href={`/sejarah`}>Sejarah</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href={`/berita-alumni`}>Berita Alumni</a>
                    </li>
                    <li>
                      <a href={`/pengumuman`}>Pengumuman</a>
                    </li>
                    <li>
                      <a href={`/agenda`}>Agenda/Program</a>
                    </li>
                    <li>
                      <a href={`/galeri`}>Galeri</a>
                    </li>
                    <li>
                      <a href={`/cdc`}>CDC</a>
                    </li>
                    <li>
                      <a href={`/kontak-kami`}>Kontak Kami</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {location.pathname === '/' ? (
        <div
          id="slider"
          className="inspiro-slider slider-fullscreen dots-creative"
          data-fade="true"
        >
          <div
            className="slide kenburns"
            data-bg-image="assets/img/notgeneric_bg3.jpg"
          >
            <div className="bg-overlay"></div>
            <div className="container">
              <div className="slide-captions text-center text-light">
                <h1>SELAMAT DATANG DI WEBSITE IKAPUNIJA</h1>
                <p>
                  Deserunt mollit ut laborum mollit magna. Do adipisicing quis
                  ipsum labore. Sunt fugiat consequat tempor sunt consequat
                  ullamco laborum aute.
                </p>
                <div>
                  <a href="#welcome" className="btn scroll-to">
                    Explore more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide kenburns"
            data-bg-image="assets/img/notgeneric_bg3.jpg"
          >
            <div className="bg-overlay"></div>
            <div className="container">
              <div className="slide-captions text-center text-light">
                <h1>WE ARE HIRING</h1>
                <p>
                  Non eu nostrud consectetur minim. Sit veniam sint sint
                  proident ad duis culpa.
                </p>
                <div>
                  <a href="#welcome" className="btn scroll-to">
                    Explore more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            className="bg-overlay"
            style={{ width: '100%', height: '80px', backgroundColor: '#000' }}
          ></div>
        </div>
      )}
    </React.Fragment>
  )
}

import React from 'react'
import { useLocation } from 'react-router-dom'
import { isLoggedIn, userLoggedIn, userLoggedOut } from '../../utils/helpers'
import data from '../../__json__'

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
                      <a href="/#">Tentang Kami</a>
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

                    {isLoggedIn() ? (
                      <li className="dropdown">
                        <a href="/#">
                          <i className="icon-user"></i>
                          {userLoggedIn().username}
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href={`/profile`}>My Profile</a>
                          </li>
                          <li>
                            <a
                              href="/#"
                              className="text-danger"
                              onClick={() => userLoggedOut()}
                            >
                              Logout
                            </a>
                          </li>
                        </ul>
                      </li>
                    ) : (
                      <li>
                        <a href={`/login`}>
                          <button type="button" className="btn btn-sm">
                            <i className="icon-user"></i> Login
                          </button>
                        </a>
                      </li>
                    )}
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
          {data &&
            data.banner.map((item, idx) => (
              <div
                key={String(idx)}
                className="slide kenburns"
                data-bg-image={item.image_url}
              >
                <div className="bg-overlay"></div>
                <div className="container">
                  <div className="slide-captions text-center text-light">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <div>
                      <a href="#welcome" className="btn scroll-to">
                        Explore more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

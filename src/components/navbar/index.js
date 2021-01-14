import React from 'react'

export default function Navbar() {
  return (
    <div className="body-inner">
      <header
        id="header"
        className="dark submenu-light"
        data-transparent="true"
        data-fullwidth="true"
      >
        <div className="header-inner">
          <div className="container">
            <div id="logo">
              <a href="/#">
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
            <div id="mainMenu">
              <div className="container">
                <nav>
                  <ul>
                    <li>
                      <a href="/#">Home</a>
                    </li>
                    <li class="dropdown">
                      <a href="/#">Tentang Kami</a>
                      <ul class="dropdown-menu">
                        <li>
                          <a href="/#">Struktur Ikapunija</a>
                        </li>
                        <li>
                          <a href="/#">Sktruktur DPA</a>
                        </li>
                        <li>
                          <a href="/#">Visi dan Misi</a>
                        </li>
                        <li>
                          <a href="/#">Sejarah</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
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
                Non eu nostrud consectetur minim. Sit veniam sint sint proident
                ad duis culpa.
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
      <section id="welcome" className="p-b-0">
        <div className="container">
          <div
            className="heading-text heading-section text-center m-b-40"
            data-animate="fadeInUp"
          >
            <h2>SEMUA INFORMASI TERKAIT IKAPUNIJA</h2>
            <span className="lead">
              Create amam ipsum dolor sit amet, Beautiful nature, and rare
              feathers!.
            </span>
          </div>
          <div className="row" data-animate="fadeInUp">
            <div className="col-lg-12 text-center">
              <img
                className="img-fluid"
                src="assets/img/audio-bg.jpg"
                alt="Welcome to ikapunija"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

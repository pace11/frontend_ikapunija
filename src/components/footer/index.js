import React from 'react'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="widget">
                <div className="widget-title">IKAPUNIJA</div>
                <p className="mb-5">
                  Selamat datang di Website Resmi IKAPUNIJA
                </p>
                <img
                  src="assets/img/pnj-logo.png"
                  width="150px"
                  alt="logo-pnj"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-3">
                  <div className="widget">
                    <div className="widget-title">Halaman</div>
                    <ul className="list">
                      <li>
                        <a href="/#">Berita Alumni</a>
                      </li>
                      <li>
                        <a href="/#">Pengumuman</a>
                      </li>
                      <li>
                        <a href="/#">Agenda/Program</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="widget">
                    <div className="widget-title">Support</div>
                    <ul className="list">
                      <li>
                        <a href="/#">Kontak Kami</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-content">
        <div className="container">
          <div className="copyright-text text-center">
            &copy; {new Date().getFullYear()} - IKAPUNIJA
          </div>
        </div>
      </div>
    </footer>
  )
}

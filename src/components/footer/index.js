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
                <p>Selamat datang di Website Resmi IKAPUNIJA</p>
                <img
                  src={require('../../assets/img/logo-ika-port.png').default}
                  width="200px"
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
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="widget">
                    <div className="widget-title">Support</div>
                    <ul className="list">
                      <li>
                        <a href={`/kontak-kami`}>Kontak Kami</a>
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

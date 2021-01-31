import React from 'react'
import data from '../../__json__'

export default function StrukturIkapunija() {
  const { struktur_dpa } = data

  return (
    <React.Fragment>
      <section id="page-title">
        <div className="container">
          <div className="page-title">
            <h1>
              <i className="fas fa-users"></i> Struktur DPA
            </h1>
          </div>
          <div className="breadcrumb">
            <ul>
              <li>
                <a href="/">Beranda</a>
              </li>
              <li className="active">
                <a href="/tentang-kami/struktur-dpa">
                  {' '}
                  <i class="fas fa-users"></i> Struktur DPA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {struktur_dpa && (
        <section id="page-content">
          <div className="container">
            <div className="heading-text heading-section text-center">
              <h2>Ketua</h2>
            </div>
            <div className="d-flex row team-members m-b-40 justify-content-center">
              <div className="col-lg-4 col-md-4">
                <div className="team-member">
                  <div className="team-image">
                    <img src={struktur_dpa.layer_1[0].img_url} alt="" />
                  </div>
                  <div className="team-desc">
                    <h3>{struktur_dpa.layer_1[0].name}</h3>
                    <p>{struktur_dpa.layer_1[0].title}</p>
                    <div className="align-center">
                      <a
                        className="btn btn-xs btn-slide btn-light"
                        href="/#"
                        data-width="118"
                      >
                        <i className="fab fa-instagram"></i>
                        <span>Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="seperator">
            <i className="fa fa-chevron-down"></i>
          </div>
          <div className="heading-text heading-section text-center">
            <h2>Anggota</h2>
          </div>
          <div className="container">
            <div className="row team-members m-b-40">
              {struktur_dpa.layer_2 &&
                struktur_dpa.layer_2.map((item, idx) => (
                  <div
                    key={String(idx)}
                    className="col-lg-4 col-md-4 col-xs-12"
                  >
                    <div className="team-member">
                      <div className="team-image">
                        <img src={item.img_url} alt="" />
                      </div>
                      <div className="team-desc">
                        <h3>{item.name}</h3>
                        <p>{item.title}</p>
                        <div className="align-center">
                          <a
                            className="btn btn-xs btn-slide btn-light"
                            href="/#"
                            data-width="118"
                          >
                            <i className="fab fa-instagram"></i>
                            <span>Instagram</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  )
}

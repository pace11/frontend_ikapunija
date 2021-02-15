import React from 'react'
import data from '../../__json__'

export default function StrukturIkapunija() {
  const { struktur_ikapunija } = data

  return (
    <React.Fragment>
      <section id="page-title">
        <div className="container">
          <div className="page-title">
            <h1>
              <i className="fas fa-users"></i> Struktur IKAPUNIJA
            </h1>
          </div>
          <div className="breadcrumb">
            <ul>
              <li>
                <a href="/">Beranda</a>
              </li>
              <li className="active">
                <a href="/tentang-kami/struktur-ikapunija">
                  {' '}
                  <i class="fas fa-users"></i> Struktur IKAPUNIJA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {struktur_ikapunija && (
        <section id="page-content">
          <div className="container">
            <div className="heading-text heading-section text-center">
              <h2>Ketua Umum</h2>
            </div>
            <div className="d-flex row team-members m-b-40 justify-content-center">
              <div className="col-lg-4 col-md-4">
                <div
                  className="team-member"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    className="team-image"
                    style={{ width: '180px', borderRadius: '15px' }}
                  >
                    <img src={struktur_ikapunija.layer_1[0].img_url} alt="" />
                  </div>
                  <div className="team-desc">
                    <h3>{struktur_ikapunija.layer_1[0].name}</h3>
                    <div className="align-center">
                      <a
                        className="btn btn-xs btn-slide btn-light"
                        href="/#"
                        data-width="118"
                      >
                        <i class="fas fa-globe"></i>
                        <span>Explore More</span>
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
          <hr className="space" />
          <div className="container">
            <div className="row team-members m-b-40">
              {struktur_ikapunija.layer_2 &&
                struktur_ikapunija.layer_2.map((item, idx) => (
                  <div className="col-lg-4 col-md-4 col-xs-12">
                    <div
                      className="team-member"
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <div
                        className="team-image"
                        style={{ width: '180px', borderRadius: '15px' }}
                      >
                        <img src={item.img_url} alt="" width="100%" />
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
                            <i class="fas fa-globe"></i>
                            <span>Explore More</span>
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

import React from 'react'

export default function VisiMisi() {
  return (
    <React.Fragment>
      <section
        id="page-title"
        data-bg-parallax={require('../../assets/img/5.jpg').default}
      >
        <div className="container">
          <div className="page-title">
            <h1>
              <i classname="fas fa-hands-helping"></i> Visi & Misi
            </h1>
          </div>
          <div className="breadcrumb">
            <ul>
              <li>
                <a href="/">Beranda</a>
              </li>
              <li className="active">
                <a href="/visi-misi">
                  <i classname="fas fa-hands-helping"></i> Visi & Misi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="heading-text heading-section text-center">
                <h2>Visi</h2>
              </div>
              <div className="col-lg-12 col-md-12 col-xs-12">
                <ol>
                  <li>
                    <p>
                      IKAPUNIJA bersifat kekeluargaan, kerakyatan, keterbukaan,
                      akuntabilitas dan berorientasi pengabdian masyarakat serta
                      kepada almamater.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="heading-text heading-section text-center">
                <h2>Misi</h2>
              </div>
              <div className="col-lg-12 col-md-12 col-xs-12">
                <ol>
                  <li>
                    <p>
                      Mempererat, membina dan mengembangkan semangat persatuan
                      dan kekeluargan dengan memanfaatkan hubungan profesional
                      dan fungsional diantara alumni Politeknik Universitas
                      Indonesia dan Politeknik Negeri Jakarta dan keluarga,
                      sehingga terwujud kesatuan alumni Politeknik Universitas
                      Indonesia dan Politeknik Negeri Jakarta.
                    </p>
                  </li>
                  <li>
                    <p>
                      Menumbuhkan, membina dan mengembangkan Alumni Politeknik
                      Universitas Indonesia dan Politeknik Negeri Jakarta untuk
                      memiliki kematangan berpikir, integritas sosial yang
                      tinggi dan memiliki kepribadian yang berlandasakan iman
                      dan takwa.
                    </p>
                  </li>
                  <li>
                    <p>
                      Mendukung para anggotanya untuk mengembangkan dan
                      mengimplementasikan ilmu pengetahuan, keterampilan dan
                      pengamatan yang dimiliki anggotanya secara profesional
                      guna dimanfaatkan bagi kepentingan para anggota,
                      almamater, masyarakat, bangsa dan negara.
                    </p>
                  </li>
                  <li>
                    <p>
                      Menghimpun informasi, sumber-sumber daya dan menjalankan
                      upaya-upaya lain yang dapat digunakan untuk peningkatan
                      pengetahuan, keterampilan dan kesejahteraan anggota serta
                      masyarakat pada umumnya.
                    </p>
                  </li>
                  <li>
                    <p>
                      Melaksanakan dan memelihara hubungan kerjasama dengan
                      alamamater, organisasi-organisasi di lingkungan Politeknik
                      Negeri Jakarta dan organisasi publik lainnya.
                    </p>
                  </li>
                  <li>
                    <p>
                      Memelihara serta menjunjung tinggi citra dan kehormatan
                      IKAPUNIJA dan Politeknik Negeri Jakarta sebagai almamater.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <hr className="space" />
      </section>
    </React.Fragment>
  )
}

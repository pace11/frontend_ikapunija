import React from 'react'

export default function Sejarah() {
  return (
    <React.Fragment>
      <section id="page-title">
        <div className="container">
          <div className="page-title">
            <h1>
              <i class="fas fa-history"></i> Sejarah
            </h1>
          </div>
          <div className="breadcrumb">
            <ul>
              <li>
                <a href="/">Beranda</a>
              </li>
              <li className="active">
                <a href="/sejarah">
                  {' '}
                  <i class="fas fa-history"></i> Sejarah
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="page-content">
        <div className="container">
          <div className="d-flex row team-members m-b-40 justify-content-center">
            <div className="col-lg-6 col-md-6 text-align-justify">
              <p>
                Dalam rangka memenuhi kebutuhan tenaga kerja profesional pada
                level supervisi di industri, pemerintah Republik Indonesia
                melalui Departemen Pedidikan dan Kebudayaan memutuskan untuk
                membuka Program pendidikan Diploma, yang kemudian disebut
                Politeknik. Hal ini tertuang dalam SK Direktur Jenderal
                Pendidikan Tinggi No. 03/DJ/Kep/1979 tertanggal 27 Januari 1979.
              </p>
              <p>
                Bahwa kemudian diberikan nama Politeknik Universitas Indonesia
                karena berada dalam naungan Universitas Indonesia dan memulai
                penerimaan mahasiswa baru pertama kali pada Tahun Akademik
                1982/1983. Pada tahun 1998 Politeknik Universitas Indonesia
                menjadi Institusi mandiri terpisah dari Universitas Indonesia
                dengan nama Politeknik Negeri Jakarta (POLITEKNIK NEGERI
                JAKARTA) melalui Surat Keputusan Menteri Pendidikan dan
                Kebudayaan No. 207/O/1998.
              </p>
              <p>
                Dengan keinginan itikad luhur para alumni untuk meningkatkan
                mutu, citra dan reputasi almameternya serta ikut mewujudkan
                suatu masyarakat adil dan makmur yang merata, maka perlu
                dibentuk suatu organiasai alumni yang berfungsi sebagai wadah
                kegiatan para anggotanya.
              </p>
              <p>
                Maka para alumni Politeknik Universitas Indonesia dan Politeknik
                Negeri Jakarta bertekad membentuk, melanjutkan dan mengembangkan
                suatu organisasi Alumni Politeknik Indonesia dan Politeknik
                Negeri Jakarta yang didirikan di kampus Politeknik Negeri
                Jakarta pada tanggal 22 Mei 2010 melalui mekanisme Rapat Umum
                Ikapunija dimana hasil dari Rapat Umum tersebut menetapkan Iqbal
                Alan Abdullah sebagai Ketua Umum Ikapunija serta 7 orang Anggota
                Dewan Perwakilan Alumni (DPA).
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

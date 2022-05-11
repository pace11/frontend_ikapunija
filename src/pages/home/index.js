import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
      <div className="container-xxl py-5">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div
              class="col-lg-3 text-center"
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  background: '#F2C94C',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <h2 className="text-light">10</h2>
              </div>
              <p class="animated slideInLeft mb-4 pb-2">Lorem Ipsum</p>
            </div>
            <div
              class="col-lg-3 text-center"
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  background: '#333333',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <h2 className="text-light">10</h2>
              </div>
              <p class="animated slideInLeft mb-4 pb-2">Lorem Ipsum</p>
            </div>
            <div
              class="col-lg-3 text-center"
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  background: '#2D9CDB',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <h2 className="text-light">10</h2>
              </div>
              <p class="animated slideInLeft mb-4 pb-2">Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h3 class="mb-5">About Us</h3>
          </div>
          <div class="row align-items-center g-5">
            <div class="col-lg-6 text-center text-lg-end overflow-hidden">
              <img
                class="img-fluid"
                src={require('../../assets/image/photo-1.jpg').default}
                alt=""
              />
            </div>
            <div class="col-lg-6 text-center text-lg-start">
              <h2 class="animated slideInLeft">YBM Brillian</h2>
              <p class="animated slideInLeft mb-4 pb-2">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p>
                Commodo voluptate occaecat sit commodo et cupidatat est dolore
                excepteur. Elit fugiat qui Lorem qui nostrud pariatur proident
                sit proident. Quis ut labore et occaecat esse excepteur
                adipisicing duis eiusmod ea cupidatat laboris occaecat deserunt.
                Nostrud laboris ut ullamco consectetur exercitation. Cupidatat
                pariatur tempor consectetur fugiat esse ut eiusmod consequat do
                enim elit non et. Consectetur esse velit sunt eu voluptate
                officia excepteur esse. Cupidatat amet esse nisi minim enim
                mollit reprehenderit consectetur.
              </p>
              <button class="btn btn-primary">Read More ...</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h3 class="mb-5">Program Kami</h3>
          </div>
          <div class="row align-items-center justify-content-center">
            <div
              class="col-lg-3 text-center m-2 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded p-3">
              <h2>Ekonomi</h2>
              <p>
                Program pendayagunaan zakat berupa bantuan stimulus
                modal,pendampingan dan managemen keuangan
              </p>
              </div>
            </div>
            <div
              class="col-lg-3 text-center m-2 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded p-3">
              <h2>Pendidikan</h2>
              <p>
                Program pendayagunaan zakat berupa bantuan beasiswa, pembinaan
                dan penunjang pendidikan
              </p>
              </div>
            </div>
            <div
              class="col-lg-3 text-center m-2 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded p-3">
              <h2>Social</h2>
              <p>
                Program pendayagunaan zakat berupa pemenuhan kebutuhan
                dasar,spiritual,pembinaan keluarga dan kemanusiaan.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

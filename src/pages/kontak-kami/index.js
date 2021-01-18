import React from 'react'

export default function KontakKami() {
  return (
    <React.Fragment>
      <section
        id="page-title"
        data-bg-parallax="https://inspirothemes.com/polo/images/parallax/5.jpg"
      >
        <div className="container">
          <div className="page-title">
            <h1>Kontak Kami</h1>
          </div>
          <div className="breadcrumb">
            <ul>
              <li>
                <a href="/">Beranda</a>
              </li>
              <li className="active">
                <a href="/kontak-kami">Kontak Kami</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="text-uppercase">Get In Touch</h3>
              <p>
                Silahkan berdiskusi dan mengirimkan pertanyaan kepada kita
                melalui form dibawah ini.
              </p>
              <div className="m-t-30">
                <form
                  className="widget-contact-form"
                  noValidate
                  action="/#"
                  method="post"
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Nama</label>
                      <input
                        type="text"
                        aria-required="true"
                        name="widget-contact-form-name"
                        required
                        className="form-control required name"
                        placeholder="Enter your Name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        aria-required="true"
                        name="widget-contact-form-email"
                        required
                        className="form-control required email"
                        placeholder="Enter your Email"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label htmlFor="subject">Subjek</label>
                      <input
                        type="text"
                        name="widget-contact-form-subject"
                        required
                        className="form-control required"
                        placeholder="Subject..."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Pesan</label>
                    <textarea
                      type="text"
                      name="widget-contact-form-message"
                      required
                      rows="5"
                      className="form-control required"
                      placeholder="Enter your Message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <script
                      src="https://www.google.com/recaptcha/api.js"
                      async
                      defer
                    ></script>
                    <div
                      className="g-recaptcha"
                      data-sitekey="6LddCxAUAAAAAKOg0-U6IprqOZ7vTfiMNSyQT2-M"
                    ></div>
                  </div>
                  <button className="btn" type="submit" id="form-submit">
                    <i className="fa fa-paper-plane"></i>&nbsp;Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="text-uppercase">Email & Alamat</h3>
              <div className="row">
                <div className="col-lg-6">
                  <address>
                    <i className="icon-mail"></i> ikapunija-info@gmail.com
                  </address>
                </div>
                <div className="col-lg-6">
                  <address>
                    <i className="icon-map-pin"></i> DKI Jakarta
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

import React from 'react'
import data from '../../__json__'

export default function Galeri() {
  return (
    <React.Fragment>
      <section id="page-title">
        <div className="container">
          <div className="page-title">
            <h1>Galeri</h1>
          </div>
          <div className="breadcrumb">
            <ul>
              <li>
                <a href="/">Beranda</a>
              </li>
              <li className="active">
                <a href="/galeri">Galeri</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="page-content">
        <div className="container">
          <div
            className="grid-layout grid-3-columns"
            data-margin="20"
            data-item="grid-item"
            data-lightbox="gallery"
          >
            {data &&
              data.galeri.map((item, idx) => (
                <div key={String(idx)} className="grid-item">
                  <a
                    className="image-hover-zoom"
                    href={item.img_url}
                    data-lightbox="gallery-image"
                  >
                    <img src={item.img_url} alt="" />
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

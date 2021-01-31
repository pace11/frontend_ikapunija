import React from 'react'
import { useParams } from 'react-router-dom'
import { ListDetailGaleri } from '../../api'

export default function GaleriDetail() {
  let { id } = useParams()
  const [data, setData] = React.useState()

  React.useEffect(() => {
    window.scrollTo(0, 0)
    async function FetchDetailGaleri() {
      await ListDetailGaleri(id).then((res) => {
        setData(res)
      })
    }
    FetchDetailGaleri()
  }, [id])

  return (
    <React.Fragment>
      <section id="page-title">
        <div className="container">
          <div className="page-title">
            <h1>
              <i className="fas fa-camera"></i> Galeri
            </h1>
          </div>
          <div className="breadcrumb">
            <ul>
              <li>
                <a href="/">Beranda</a>
              </li>
              <li>
                <a href="/galeri">
                  <i className="fas fa-camera"></i> Galeri
                </a>
              </li>
              <li className="active">
                <a href="/#">{id}</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="page-content">
        <div className="container">
          <div
            className="grid-3-columns"
            data-margin="20"
            data-item="grid-item"
            data-lightbox="gallery"
          >
            {data &&
              data
                .filter((item) => item.galeri_active)
                .map((item, idx) => (
                  <div key={String(idx)} className="grid-item">
                    <a
                      className="image-hover-zoom"
                      href={item.galeri_image_url}
                      data-lightbox="gallery-image"
                    >
                      <img src={item.galeri_image_url} alt="img-galeri" />
                    </a>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

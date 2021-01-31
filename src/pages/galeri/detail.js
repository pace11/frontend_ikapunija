import React from 'react'
import { useParams } from 'react-router-dom'
import { ListDetailGaleri } from '../../api'
import LoadingComponent from './loading-component'

export default function GaleriDetail() {
  let { id } = useParams()
  const [data, setData] = React.useState()
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    window.scrollTo(0, 0)
    async function FetchDetailGaleri() {
      await ListDetailGaleri(id).then((res) => {
        const { data, error } = res
        setData(data)
        setIsLoading(error)
      })
    }
    FetchDetailGaleri()
  }, [id])

  return (
    <React.Fragment>
      <section id="page-title">
        <div className="container">
          <div className="row">
            <div className="content col-lg-12 col-md-12 col-xs-12">
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
          </div>
        </div>
      </section>
      <section id="page-content">
        <div className="container">
          {isLoading ? (
            <LoadingComponent />
          ) : (
            <div className="row">
              <div className="col-lg-12 col-md-12 col-xs-12">
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
                            <img
                              src={item.galeri_image_url}
                              alt="img-galeri"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/150'
                              }}
                            />
                          </a>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  )
}

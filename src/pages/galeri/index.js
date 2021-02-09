import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { ListGaleri } from '../../api'
import LoadingComponent from './loading-component'

export default function Galeri() {
  let { url } = useRouteMatch()
  const [data, setData] = React.useState()
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function FetchListGaleri() {
      await ListGaleri().then((res) => {
        const { data, error } = res
        setData(data)
        setIsLoading(error)
      })
    }
    FetchListGaleri()
  }, [])

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
                  <li className="active">
                    <a href="/galeri">
                      <i className="fas fa-camera"></i> Galeri
                    </a>
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
          ) : data && data.length ? (
            <div className="row">
              <div className="col-lg-12 col-md-12 col-xs-12">
                <div
                  className="grid-3-columns"
                  data-margin="20"
                  data-item="grid-item"
                  data-lightbox="gallery"
                >
                  {data.map((item, idx) => (
                    <div
                      key={String(idx)}
                      className="grid-item"
                      style={{ padding: '10px' }}
                    >
                      <a
                        className="image-hover-zoom"
                        href={`${url}/detail/${item.galeri_id}`}
                      >
                        <img
                          src={item.galeri_img_cover}
                          alt="galeri-cover"
                          style={{ cursor: 'pointer' }}
                          onError={(e) => {
                            e.target.src = require('../../assets/img/album.png').default
                          }}
                        />
                      </a>
                      <p style={{ marginBottom: '20px' }}>
                        {item.galeri_title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <i className="far fa-window-close fa-3x"></i>
              <p style={{ fontSize: '18x' }}>Belum ada Galeri</p>
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  )
}

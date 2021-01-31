import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { ListGaleri } from '../../api'

export default function Galeri() {
  let { url } = useRouteMatch()
  const [data, setData] = React.useState()

  React.useEffect(() => {
    async function FetchListGaleri() {
      await ListGaleri().then((res) => {
        setData(res)
      })
    }
    FetchListGaleri()
  }, [])

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
              <li className="active">
                <a href="/galeri">
                  <i className="fas fa-camera"></i> Galeri
                </a>
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
              data.map((item, idx) => (
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
                      src={require('../../assets/img/album.png').default}
                      alt="img-galeri"
                      style={{ cursor: 'pointer' }}
                    />
                  </a>
                  <p style={{ marginBottom: '20px' }}>{item.galeri_title}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

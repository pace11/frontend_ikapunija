import React from 'react'
import { ListStruktur } from '../../api'
import { imageStruktur } from '../../const/env'
import LoadingComponent from './loading-component'

export default function StrukturIkapunija() {
  const [data, setData] = React.useState()
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchListStruktur() {
      await ListStruktur('dpa').then((res) => {
        if (res !== undefined) {
          setIsLoading(false)
          setData(res)
        }
      })
    }
    fetchListStruktur()
  }, [])

  return (
    <React.Fragment>
      <section
        id="page-title"
        data-bg-parallax={require('../../assets/img/5.jpg').default}
      >
        <div className="container">
          <div className="page-title">
            <h1>
              <i className="fas fa-users"></i> Struktur DPA
            </h1>
          </div>
          <div className="breadcrumb">
            <ul>
              <li>
                <a href="/">Beranda</a>
              </li>
              <li className="active">
                <a href="/tentang-kami/struktur-dpa">
                  {' '}
                  <i classname="fas fa-users"></i> Struktur DPA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="page-content">
        {isLoading && !data ? (
          <LoadingComponent />
        ) : (
          data &&
          data.map((item, i) => (
            <React.Fragment key={String(i)}>
              <div className="container">
                <div className="heading-text heading-section text-center">
                  <h2>{item.namaLevel}</h2>
                </div>
                <div className="d-flex row team-members m-b-40 justify-content-center">
                  {item.list.map((items, idx) => (
                    <div
                      className="col-lg-4 col-md-4 col-xs-12"
                      key={String(idx)}
                    >
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
                          <img
                            src={`${imageStruktur}/${items.foto}`}
                            alt="img-foto"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/150'
                            }}
                          />
                        </div>
                        <div className="team-desc">
                          <h3>{items.nama}</h3>
                          <p>{items.nama_jabatan}</p>
                          <div>
                            <ul className="explore-more-parent">
                              <li className="parent-li">
                                <a
                                  href={void 0}
                                  className="btn btn-xs btn-light"
                                  style={{ padding: '0 15px' }}
                                >
                                  <span>Explore More</span>
                                </a>
                                <ul className="explore-more-child">
                                  <li>
                                    <a
                                      href={items.fb ? items.fb : void 0}
                                      target="_blank"
                                      rel="noreferrer"
                                      style={{
                                        color: '#4267B2',
                                        textDecoration: 'underline',
                                      }}
                                    >
                                      <i className="fab fa-facebook"></i>
                                    </a>
                                    <a
                                      href={
                                        items.twitter ? items.twitter : void 0
                                      }
                                      target="_blank"
                                      rel="noreferrer"
                                      style={{
                                        color: '#1DA1F2',
                                        textDecoration: 'underline',
                                        margin: '0 0 0 10px',
                                      }}
                                    >
                                      <i className="fab fa-twitter"></i>
                                    </a>
                                    <a
                                      href={items.ig ? items.ig : void 0}
                                      target="_blank"
                                      rel="noreferrer"
                                      style={{
                                        color: '#833AB4',
                                        textDecoration: 'underline',
                                        margin: '0 0 0 10px',
                                      }}
                                    >
                                      <i className="fab fa-instagram"></i>
                                    </a>
                                    <a
                                      href={
                                        items.linkedin ? items.linkedin : void 0
                                      }
                                      target="_blank"
                                      rel="noreferrer"
                                      style={{
                                        color: '#4267B2',
                                        textDecoration: 'underline',
                                        margin: '0 0 0 10px',
                                      }}
                                    >
                                      <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a
                                      href={`mailto:${items.email}`}
                                      style={{
                                        color: '#495057',
                                        textDecoration: 'underline',
                                        margin: '0 0 0 10px',
                                      }}
                                    >
                                      <i className="fas fa-envelope"></i>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {i === 0 && (
                <div className="seperator">
                  <i className="fa fa-chevron-down"></i>
                </div>
              )}
            </React.Fragment>
          ))
        )}
        <style>
          {` 
            ul.explore-more-parent {
              list-style: none;
              margin: 0;
              padding-left: 0;
            }
            ul.explore-more-parent li.parent-li {
              display: block;
              position: relative;
            }
            ul.explore-more-parent li.parent-li:hover {
              cursor: pointer;
            }
            ul.explore-more-parent li.parent-li ul.explore-more-child {
              visibility: hidden;
              opacity: 0;
              width: 100%;
              position: absolute;
              transition: all .3s ease;
              top: 10px;
              display: block;
              list-style: none;
              background: #fff;
              z-index: 5;
              padding: 2px;
            }
            ul.explore-more-parent li.parent-li:hover > ul.explore-more-child,
            ul.explore-more-parent li.parent-li ul.explore-more-child:hover {
              visibility: visible;
              opacity: 1;
              top: 0;
            }
            ul.explore-more-parent li.parent-li ul.explore-more-child li {
              clear: both;
              width: 100%;
            }
          `}
        </style>
      </section>
    </React.Fragment>
  )
}

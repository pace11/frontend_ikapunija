import React from 'react'
import { useParams } from 'react-router-dom'
import { ListDetailPengumuman } from '../../api'
import LoadingComponent from './loading-component'

export default function BeritaAlumniDetail() {
  let { id } = useParams()
  const [data, setData] = React.useState()
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    window.scrollTo(0, 0)
    async function FetchDetailPengumuman() {
      await ListDetailPengumuman(id).then((res) => {
        const { data, error } = res
        setData(data)
        setIsLoading(error)
      })
    }
    FetchDetailPengumuman()
  }, [id])

  return (
    <React.Fragment>
      <section id="page-title">
        <div className="container">
          <div className="page-title">
            <h1>
              <i className="fas fa-bullhorn"></i> Pengumuman
            </h1>
          </div>
          <div className="breadcrumb">
            <ul>
              <li>
                <a href="/">Beranda</a>
              </li>
              <li>
                <a href="/pengumuman">
                  <i className="fas fa-bullhorn"></i> Pengumuman
                </a>
              </li>
              <li className="active">
                <a href="/#">{data && data.notice_title}</a>
              </li>
            </ul>
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
                <div id="blog" className="single-post">
                  {data && (
                    <div className="post-item">
                      <div className="row">
                        <div className="content col-lg-9">
                          <div>
                            <div className="post-image">
                              <a href="/#">
                                <img
                                  alt="img-pengumuman-detail"
                                  src={data.notice_img_url}
                                  onError={(e) => {
                                    e.target.src =
                                      'https://via.placeholder.com/150'
                                  }}
                                />
                              </a>
                            </div>
                            <div className="post-item-description">
                              <h2>{data.notice_title}</h2>
                              <div className="post-meta">
                                <span className="post-meta-date">
                                  <i className="fa fa-calendar-o"></i>
                                  {new Date(data.notice_date).toDateString()}
                                </span>
                                {data.notice_category && (
                                  <span className="post-meta-category">
                                    <a href="/#">
                                      <i className="fa fa-tag"></i>
                                      {data.notice_category.nama}
                                    </a>
                                  </span>
                                )}
                              </div>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: data.notice_desc,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  )
}

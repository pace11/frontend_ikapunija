import React from 'react'
import { useParams } from 'react-router-dom'
import { ListDetailBeritaAlumni } from '../../api'
import LoadingComponent from './loading-component'

export default function BeritaAlumniDetail() {
  let { id } = useParams()
  const [data, setData] = React.useState()
  const [isLoading, setIsloading] = React.useState(true)

  React.useEffect(() => {
    window.scrollTo(0, 0)
    async function FetchDetailBeritaAlumni() {
      await ListDetailBeritaAlumni(id).then((res) => {
        const { data, error } = res
        setData(data)
        setIsloading(error)
      })
    }
    FetchDetailBeritaAlumni()
  }, [id])

  return (
    <section id="page-content">
      <div className="container">
        <div className="row">
          <div className="content col-lg-12 col-md-12 col-xs-12">
            <div className="page-title">
              <h1>
                <i class="far fa-file-alt"></i> Berita Alumni
              </h1>
              <div className="breadcrumb float-left">
                <ul>
                  <li>
                    <a href="/">Beranda</a>
                  </li>
                  <li>
                    <a href="/berita-alumni">
                      <i class="far fa-file-alt"></i> Berita Alumni
                    </a>
                  </li>
                  <li className="active">
                    <a href="/#">{data && data.news_title}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
                                alt={data.news_img_url}
                                src={data.news_img_url}
                                onError={(e) => {
                                  e.target.src =
                                    'https://via.placeholder.com/150'
                                }}
                              />
                            </a>
                          </div>
                          <div className="post-item-description">
                            {/* <h2></h2> */}
                            <div className="post-meta">
                              <span className="post-meta-date">
                                <i className="fa fa-calendar-o"></i>
                                {new Date(data.news_date).toDateString()}
                              </span>
                              {data.news_category && (
                                <span className="post-meta-category">
                                  <a href="/#">
                                    <i className="fa fa-tag"></i>
                                    {data.news_category.nama}
                                  </a>
                                </span>
                              )}
                            </div>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: data.news_desc,
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
  )
}

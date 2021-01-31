import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { ListBeritaAlumni } from '../../api'
import LoadingComponent from './loading-component'

export default function BeritaAlumni() {
  let { url } = useRouteMatch()
  const [data, setData] = React.useState()
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function FetchBeritaAlumni() {
      await ListBeritaAlumni().then((res) => {
        setData(res)
        setIsLoading(false)
      })
    }
    FetchBeritaAlumni()
  }, [])

  return (
    <section id="page-content">
      <div className="container">
        <div className="row">
          <div className="content col-lg-9 col-md-9">
            <div className="page-title">
              <h1>
                <i class="far fa-file-alt"></i> Berita Alumni
              </h1>
              <div className="breadcrumb float-left">
                <ul>
                  <li>
                    <a href="/">Beranda</a>
                  </li>
                  <li className="active">
                    <a href="/berita-alumni">
                      <i class="far fa-file-alt"></i> Berita Alumni
                    </a>
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
            <div className="content col-lg-9 col-md-9">
              <div id="blog" className="post-thumbnails">
                {data &&
                  data.map((item, idx) => (
                    <div key={String(idx)} className="post-item">
                      <div className="post-item-wrap">
                        <div className="post-image">
                          <a href={`${url}/detail/${item.news_id}`}>
                            <img
                              alt={`${item.news_img_url}`}
                              src={`${item.news_img_url}`}
                            />
                          </a>
                          {item.news_category && (
                            <span className="post-meta-category">
                              <a href="/#">{item.news_category.nama}</a>
                            </span>
                          )}
                        </div>
                        <div className="post-item-description">
                          <span className="post-meta-date">
                            <i className="fa fa-calendar-o"></i>
                            {new Date(item.news_date).toDateString()}
                          </span>
                          <h2>
                            <a href={`${url}/detail/${item.news_id}`}>
                              {item.news_title}
                            </a>
                          </h2>
                          <p>{item.news_desc}</p>
                          <a
                            href={`${url}/detail/${item.news_id}`}
                            className="item-link"
                          >
                            Read More <i className="icon-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

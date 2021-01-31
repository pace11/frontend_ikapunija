import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { ListPengumuman } from '../../api'
import LoadingComponent from './loading-component'

export default function Pengumuman() {
  let { url } = useRouteMatch()
  const [data, setData] = React.useState()
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function FetchListPengumuman() {
      await ListPengumuman().then((res) => {
        const { data, error } = res
        setData(data)
        setIsLoading(error)
      })
    }
    FetchListPengumuman()
  }, [])

  return (
    <section id="page-content" className="sidebar-right">
      <div className="container">
        <div className="row">
          <div className="content col-lg-12 col-md-12 col-xs-12">
            <div className="page-title">
              <h1>
                <i class="fas fa-bullhorn"></i> Pengumuman
              </h1>
              <div className="breadcrumb float-left">
                <ul>
                  <li>
                    <a href="/">Beranda</a>
                  </li>
                  <li className="active">
                    <a href="/pengumuman">
                      <i class="fas fa-bullhorn"></i> Pengumuman
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
            <div className="col-lg-12 col-md-12 col-xs-12">
              <div id="blog" className="post-thumbnails">
                {data &&
                  data.map((item, idx) => (
                    <div key={String(idx)} className="post-item">
                      <div className="post-item-wrap">
                        <div className="post-image">
                          <a href={`${url}/detail/${item.notice_id}`}>
                            <img
                              alt={item.notice_img_url}
                              src={item.notice_img_url}
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/150'
                              }}
                            />
                          </a>
                          {item.notice_category && (
                            <span className="post-meta-category">
                              <a href="/#">{item.notice_category.nama}</a>
                            </span>
                          )}
                        </div>
                        <div className="post-item-description">
                          <span className="post-meta-date">
                            <i className="fa fa-calendar-o"></i>
                            {new Date(item.notice_date).toDateString()}
                          </span>
                          <h2>
                            <a href={`${url}/detail/${item.notice_id}`}>
                              {item.notice_title}
                            </a>
                          </h2>
                          <p>{item.notice_desc}</p>
                          <a
                            href={`${url}/detail/${item.notice_id}`}
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
            {/* <div className="sidebar sticky-sidebar col-lg-3">
            <div className="widget ">
              <h4 className="widget-title">Berita Alumni</h4>
              <div className="post-thumbnail-list">
                {data &&
                  data.map((item, idx) => (
                    <div key={String(idx)} className="post-thumbnail-entry">
                      <img alt="" src={item.image_url_post} />
                      <div className="post-thumbnail-content">
                        <a href="/#">{item.title_post}</a>
                        <span className="post-date">
                          <i className="icon-calendar"></i> {item.date_post}
                        </span>
                        <span className="post-category">
                          <i className="fa fa-tag"></i> {item.tag_post}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div> */}
          </div>
        )}
      </div>
    </section>
  )
}

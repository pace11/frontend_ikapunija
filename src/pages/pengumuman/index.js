import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { ListPengumuman } from '../../api'

export default function Pengumuman() {
  let { url } = useRouteMatch()
  const [data, setData] = React.useState()

  React.useEffect(() => {
    async function FetchListPengumuman() {
      await ListPengumuman().then((res) => {
        setData(res)
      })
    }
    FetchListPengumuman()
  }, [])

  return (
    <section id="page-content" className="sidebar-right">
      <div className="container">
        <div className="row">
          <div className="content col-lg-9">
            <div className="page-title">
              <h1><i class="fas fa-bullhorn"></i> Pengumuman</h1>
              <div className="breadcrumb float-left">
                <ul>
                  <li>
                    <a href="/">Beranda</a>
                  </li>
                  <li className="active">
                    <a href="/pengumuman"><i class="fas fa-bullhorn"></i> Pengumuman</a>
                  </li>
                </ul>
              </div>
            </div>
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
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="/#">
                    <i className="fa fa-angle-left"></i>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#">
                    2
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="/#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </li>
              </ul>
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
      </div>
    </section>
  )
}

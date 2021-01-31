import React from 'react'
import { useParams } from 'react-router-dom'
import { ListDetailPengumuman } from '../../api'

export default function BeritaAlumniDetail() {
  let { id } = useParams()
  const [data, setData] = React.useState()

  React.useEffect(() => {
    window.scrollTo(0, 0)
    async function FetchDetailPengumuman() {
      await ListDetailPengumuman(id).then((res) => {
        setData(res)
      })
    }
    FetchDetailPengumuman()
  }, [id])

  return (
    <section id="page-content">
      <div className="container">
        <div className="page-title">
          <h1>
            <i class="fas fa-bullhorn"></i> Pengumuman
          </h1>
          <div className="breadcrumb float-left">
            <ul>
              <li>
                <a href="/">Beranda</a>
              </li>
              <li>
                <a href="/pengumuman">
                  <i class="fas fa-bullhorn"></i> Pengumuman
                </a>
              </li>
              <li className="active">
                <a href="/#">{data && data.notice_title}</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="blog" className="single-post">
          {data && (
            <div className="post-item">
              <div className="row">
                <div className="content col-lg-9">
                  <div>
                    <div className="post-image">
                      <a href="/#">
                        <img alt="" src={data.notice_img_url} />
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
                      <p>{data.notice_desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom'
import { ListDetailCdc } from '../../api'

export default function CdcDetail() {
  let { id } = useParams()
  const [data, setData] = React.useState()

  React.useEffect(() => {
    window.scrollTo(0, 0)
    async function FetchDetailCdc() {
      await ListDetailCdc(id).then((res) => {
        setData(res)
      })
    }
    FetchDetailCdc()
  }, [id])

  return (
    <section id="page-content">
      <div className="container">
        <div className="page-title">
          <h1>
            <i className="fas fa-briefcase"></i> CDC
          </h1>
          <div className="breadcrumb float-left">
            <ul>
              <li>
                <a href="/">Beranda</a>
              </li>
              <li>
                <a href="/cdc">
                  <i className="fas fa-briefcase"></i> CDC
                </a>
              </li>
              <li className="active">
                <a href="/#">{data && data.cdc_title}</a>
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
                        <img
                          alt={data.cdc_img_url}
                          src={data.cdc_img_url}
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/150'
                          }}
                        />
                      </a>
                    </div>
                    <div className="post-item-description">
                      {/* <h2></h2> */}
                      <div className="post-meta">
                        <span
                          className="post-meta-date"
                          style={{ fontWeight: 'bold' }}
                        >
                          Diposting:
                          <i className="fa fa-calendar-o"></i>
                          {new Date(data.cdc_date).toDateString()}
                        </span>
                        <span
                          className="post-meta-date"
                          style={{ fontWeight: 'bold' }}
                        >
                          Pendaftaran Dibuka Dari:{' '}
                          {new Date(data.cdc_start_date).toDateString()} -{' '}
                          {new Date(data.cdc_end_date).toDateString()}
                        </span>
                        {data.cdc_category && (
                          <span className="post-meta-category">
                            <a href="/#">
                              <i className="fa fa-tag"></i>
                              {data.cdc_category.nama}
                            </a>
                          </span>
                        )}
                      </div>
                      <p>{data.cdc_desc}</p>
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

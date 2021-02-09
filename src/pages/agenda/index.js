import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { ListAgenda } from '../../api'
import LoadingComponent from './loading-component'

export default function Agenda() {
  let { url } = useRouteMatch()
  const [data, setData] = React.useState()
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function FetchListAgenda() {
      await ListAgenda().then((res) => {
        const { data, error } = res
        setData(data)
        setIsLoading(error)
      })
    }
    FetchListAgenda()
  }, [])

  return (
    <section id="page-content" className="sidebar-right">
      <div className="container">
        <div className="row">
          <div className="content col-lg-12 col-md-12 col-xs-12">
            <div className="page-title">
              <h1>
                <i className="far fa-calendar-alt"></i> Agenda & Program
              </h1>
              <div className="breadcrumb float-left">
                <ul>
                  <li>
                    <a href="/">Beranda</a>
                  </li>
                  <li className="active">
                    <a href="/agenda-program">
                      <i className="far fa-calendar-alt"></i> Agenda & Program
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {isLoading ? (
          <LoadingComponent />
        ) : data && data.length ? (
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
              <div id="blog" className="post-3-columns">
                {data.map((item, idx) => (
                  <div key={String(idx)} className="post-item">
                    <div className="post-item-wrap">
                      <div className="post-image">
                        <a href={`${url}/detail/${item.agenda_id}`}>
                          <img
                            alt="img-agenda-list"
                            src={item.agenda_img_url}
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/150'
                            }}
                            style={{
                              padding: '10px',
                            }}
                          />
                        </a>
                        {item.agenda_category && (
                          <span className="post-meta-category">
                            <a href="/#">{item.agenda_category.nama}</a>
                          </span>
                        )}
                      </div>
                      <div className="post-item-description">
                        <span className="post-meta-date">
                          <i className="fa fa-calendar-o"></i>
                          {new Date(item.agenda_date).toDateString()}
                        </span>
                        <h2>
                          <a href={`${url}/detail/${item.agenda_id}`}>
                            {item.agenda_title}
                          </a>
                        </h2>
                        <p>{item.agenda_desc}</p>
                        <a
                          href={`${url}/detail/${item.agenda_id}`}
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
        ) : (
          <div className="text-center">
            <i className="far fa-window-close fa-3x"></i>
            <p style={{ fontSize: '18x' }}>Belum ada Agenda & Program</p>
          </div>
        )}
      </div>
      <style>
        {`
          span.post-meta-category {
            margin: 10px !important;
          }
        `}
      </style>
    </section>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom'
import { ListDetailAgenda } from '../../api'
import LoadingComponent from './loading-component'

export default function BeritaAlumniDetail() {
  let { id } = useParams()
  const [data, setData] = React.useState()
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    window.scrollTo(0, 0)
    async function FetchDetailAgenda() {
      await ListDetailAgenda(id).then((res) => {
        const { data, error } = res
        setData(data)
        setIsLoading(error)
      })
    }
    FetchDetailAgenda()
  }, [id])

  return (
    <section id="page-content">
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
                  <li>
                    <a href="/agenda-program">
                      <i className="far fa-calendar-alt"></i> Agenda & Program
                    </a>
                  </li>
                  <li className="active">
                    <a href="/#">{data && data.agenda_title}</a>
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
                                alt={data.agenda_img_url}
                                src={data.agenda_img_url}
                                onError={(e) => {
                                  e.target.src =
                                    'https://via.placeholder.com/150'
                                }}
                              />
                            </a>
                          </div>
                          <div className="post-item-description">
                            <h2>{data.agenda_title}</h2>
                            <div className="post-meta">
                              <span className="post-meta-date">
                                <i className="fa fa-calendar-o"></i>
                                {new Date(data.agenda_date).toDateString()}
                              </span>
                            </div>
                            <p>{data.agenda_desc}</p>
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

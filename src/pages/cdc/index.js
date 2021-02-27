import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { ListCdc } from '../../api'
import { isLoggedIn } from '../../utils/helpers'
import LoadingComponent from './loading-component'

export default function Cdc() {
  let { url } = useRouteMatch()
  const [data, setData] = React.useState()
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function FetchListCdc() {
      await ListCdc().then((res) => {
        const { data, error } = res
        setData(data)
        setIsLoading(error)
      })
    }
    FetchListCdc()
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
              <i className="fas fa-briefcase"></i> CDC
            </h1>
          </div>
          <div className="breadcrumb">
            <ul>
              <li>
                <a href="/">Beranda</a>
              </li>
              <li className="active">
                <a href="/cdc">
                  <i className="fas fa-briefcase"></i> CDC
                </a>
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
              <div className="col-md-12 col-lg-12 col-xs-12">
                <div
                  id="blog"
                  className="post-4-columns"
                  style={{ margin: '5px' }}
                >
                  {data &&
                    data.map((item, idx) => (
                      <div
                        key={String(idx)}
                        className="post-item border"
                        style={{ margin: '5px' }}
                      >
                        <div className="post-item-wrap">
                          <div className="post-item-description">
                            <span className="post-meta-date">
                              <i className="fa fa-calendar"></i>
                              {new Date(item.cdc_date).toDateString()}
                            </span>
                            {item.cdc_category && (
                              <span className="post-meta-category">
                                <a href="/#">
                                  <i className="fa fa-tag"></i>
                                  {item.cdc_category.nama}
                                </a>
                              </span>
                            )}
                            <h2>
                              <a
                                href={
                                  isLoggedIn()
                                    ? `${url}/detail/${item.cdc_id}`
                                    : `/login`
                                }
                              >
                                {item.cdc_title}
                              </a>
                            </h2>
                            <p>{item.cdc_desc}</p>
                            <a
                              href={
                                isLoggedIn()
                                  ? `${url}/detail/${item.cdc_id}`
                                  : `/login`
                              }
                              className="btn"
                            >
                              Apply <i className="icon-chevron-right"></i>
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
    </React.Fragment>
  )
}

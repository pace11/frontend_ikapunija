import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { ListCdc } from '../../api'
import { isLoggedIn } from '../../utils/helpers'

export default function Cdc() {
  let { url } = useRouteMatch()
  const [data, setData] = React.useState()

  React.useEffect(() => {
    async function FetchListCdc() {
      await ListCdc().then((res) => {
        setData(res)
      })
    }
    FetchListCdc()
  }, [])

  return (
    <section id="page-content">
      <div className="container">
        <div className="row">
          <div className="page-title">
            <h1>
              <i className="fas fa-briefcase"></i> CDC
            </h1>
            <div className="breadcrumb float-left">
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
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div id="blog" className="post-3-columns" style={{ margin: '5px' }}>
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
                          <span class="post-meta-category">
                            <a href="/#">
                              <i class="fa fa-tag"></i>
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
      </div>
    </section>
  )
}

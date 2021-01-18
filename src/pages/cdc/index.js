import React from 'react'
import data from '../../__json__'

export default function Cdc() {
  return (
    <section id="page-content">
      <div className="container">
        <div className="page-title">
          <h1>CDC</h1>
          <div className="breadcrumb float-left">
            <ul>
              <li>
                <a href="/">Beranda</a>
              </li>
              <li className="active">
                <a href="/cdc">CDC</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="blog"
          className="grid-layout post-3-columns m-b-30"
          data-item="post-item"
        >
          {data &&
            data.cdc.map((item, idx) => (
              <div key={String(idx)} className="post-item border">
                <div className="post-item-wrap">
                  <div className="post-item-description">
                    <span className="post-meta-date">
                      <i className="fa fa-calendar-o"></i>
                      {item.date_cdc}
                    </span>
                    <h2>
                      <a href="/#">{item.title_cdc}</a>
                    </h2>
                    <p>{item.description_cdc}</p>
                    <a href="#/" className="btn">
                      Apply <i className="icon-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

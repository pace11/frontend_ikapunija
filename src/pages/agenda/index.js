import React from 'react'
import data from '../../__json__'

export default function Agenda() {
  return (
    <section id="page-content" className="sidebar-right">
      <div className="container">
        <div className="row">
          <div className="content col-lg-12 col-md-12 col-xs-12">
            <div className="page-title">
              <h1>Agenda/Program</h1>
              <div className="breadcrumb float-left">
                <ul>
                  <li>
                    <a href="/">Beranda</a>
                  </li>
                  <li className="active">
                    <a href="/pengumuman">Agenda/Program</a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="blog" className="post-thumbnails">
              {data &&
                data.agenda_program.map((item, idx) => (
                  <div key={String(idx)} className="post-item">
                    <div className="post-item-wrap">
                      <div className="post-image">
                        <a href="/#">
                          <img alt="" src={item.image_url_post} />
                        </a>
                        <span className="post-meta-category">
                          <a href="/#">{item.tag_post}</a>
                        </span>
                      </div>
                      <div className="post-item-description">
                        <span className="post-meta-date">
                          <i className="fa fa-calendar-o"></i>
                          {item.date_post}
                        </span>
                        <h2>
                          <a href="/#">{item.title_post}</a>
                        </h2>
                        <p>{item.description_post}</p>
                        <a href="/#" className="item-link">
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
        </div>
      </div>
    </section>
  )
}

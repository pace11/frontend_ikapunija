import React from 'react'
import data from '../../__json__'

export default function BeritaAlumni() {
  return (
    <section id="page-content">
      <div className="container">
        <div className="page-title">
          <h1>Berita Alumni</h1>
          <div className="breadcrumb float-left">
            <ul>
              <li>
                <a href="/">Beranda</a>
              </li>
              <li className="active">
                <a href="/#">Berita Alumni</a>
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
            data.berita_alumni.map((item, idx) => (
              <div key={String(idx)} className="post-item border">
                <div className="post-item-wrap">
                  <div className="post-image">
                    <a href="/#">
                      <img alt="" src={`${item.image_url_post}`} />
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
        </div>
      </div>
    </section>
  )
}

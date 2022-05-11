import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Header() {
  const [data, setData] = useState()

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const datas = await res.json()
      setData(datas)
    }
    fetchData()
  }, [])

  return (
    <header id="home" className="welcome-hero">
      <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators">
          {data &&
            data.map((_, idx) => (
              <li
                data-target="#header-carousel"
                data-slide-to={`${idx}`}
                className={`${idx === 0 ? "active" : ""}`}
              >
                <span className="small-circle"></span>
              </li>
            ))}
        </ol>
        <div className="carousel-inner" role="listbox">
          {data &&
            data.map((item, idx) => (
              <div className={`item ${idx === 0 ? "active" : ""}`}>
                <div className={`single-slide-item slide${idx}`}>
                  <div className="container">
                    <div className="welcome-hero-content">
                      <div className="row">
                        <div className="col-sm-7">
                          <div className="single-welcome-hero">
                            <div className="welcome-hero-txt">
                              <h4>{item.name}</h4>
                              <h2>{item.username}</h2>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiuiana smod tempor ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-5">
                          <div className="single-welcome-hero">
                            <div className="welcome-hero-img">
                              <img src={require("../../assets/image/photo-1.jpeg")} alt="slider" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="top-area">
        <div className="header-area">
          <nav
            className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
            data-minus-value-desktop="70"
            data-minus-value-mobile="55"
            data-speed="1000"
          >
            <div className="top-search">
              <div className="container">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-search"></i>
                  </span>
                  <input type="text" className="form-control" placeholder="Search" />
                  <span className="input-group-addon close-search">
                    <i className="fa fa-times"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-menu"
                >
                  <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="#aa">
                  Logo YBM Brillian
                </a>
              </div>
              <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                <ul
                  className="nav navbar-nav navbar-center"
                  data-in="fadeInDown"
                  data-out="fadeOutUp"
                >
                  <li>
                    <Link to="/">home</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/program">Program</Link>
                  </li>
                  <li>
                    <Link to="/news">News</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="clearfix"></div>
      </div>
    </header>
  )
}

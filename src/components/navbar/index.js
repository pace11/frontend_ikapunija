import React from 'react'
import cookies from 'js-cookie'
import { useRouteMatch } from 'react-router-dom'
import { isLoggedIn, userLoggedIn, userLoggedOut } from '../../utils/helpers'
import { ListBanner } from '../../api'
import NavbarList from './navbar-list'

export default function Navbar({ location }) {
  let { url } = useRouteMatch()
  const [banner, setBanner] = React.useState()

  React.useEffect(() => {
    const BANNER_LOCAL = cookies.get('list_banner')
    async function FetchListBanner() {
      if (BANNER_LOCAL && BANNER_LOCAL !== undefined) {
        setBanner(JSON.parse(BANNER_LOCAL))
        await ListBanner().then((res) => {
          if (JSON.stringify(res) === BANNER_LOCAL) {
            setBanner(JSON.parse(BANNER_LOCAL))
          } else {
            cookies.set('list_banner', JSON.stringify(res))
            window.location.href = '/'
          }
        })
      } else {
        await ListBanner().then((res) => {
          cookies.set('list_banner', JSON.stringify(res))
          setBanner(res)
        })
        window.location.href = '/'
      }
    }
    FetchListBanner()
  }, [])

  return (
    <div>
      <header
        id="header"
        className="dark submenu-light"
        data-transparent="true"
        data-fullwidth="true"
      >
        <div className="header-inner">
          <div className="container">
            <div id="logo">
              <a href={`/`}>
                <span className="logo-default">
                  <img
                    src={require('../../assets/img/logo-ika-hitam.png').default}
                    alt="logo-hitam"
                    width="250px"
                  />
                </span>
                <span className="logo-dark">
                  <img
                    src={require('../../assets/img/logo-ika-putih.png').default}
                    alt="logo-putih"
                    width="250px"
                  />
                </span>
              </a>
            </div>
            <div id="search">
              <a
                id="btn-search-close"
                className="btn-search-close"
                aria-labelledby="Close search form"
                href="/#"
              >
                <i className="icon-x"></i>
              </a>
              <form
                className="search-form"
                action="search-results-page.html"
                method="get"
              >
                <input
                  className="form-control"
                  name="q"
                  type="text"
                  placeholder="Type & Search..."
                />
                <span className="text-muted">
                  Start typing & press "Enter" or "ESC" to close
                </span>
              </form>
            </div>
            <div id="mainMenu-trigger">
              <a className="lines-button x" href="/#">
                <span className="lines"></span>
              </a>
            </div>
            <div id="mainMenu">
              <div className="container">
                <nav>
                  <ul>
                    {NavbarList &&
                      NavbarList.map((item, idx) => (
                        <li
                          className={item.subTitle ? `dropdown` : ``}
                          key={String(idx)}
                        >
                          <a
                            href={item.link}
                            className={url.includes(item.slug) ? `menu` : ``}
                          >
                            {item.title}
                          </a>
                          {item.subTitle && (
                            <ul className="dropdown-menu">
                              {item.subTitle.map((items, key) => (
                                <li key={String(key)}>
                                  <a href={items.link}>{items.title}</a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    {isLoggedIn() ? (
                      <li className="dropdown">
                        <a href="/#">
                          <i className="icon-user"></i>
                          {userLoggedIn().username}
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href={`/profil`}>Profile ku</a>
                          </li>
                          <li>
                            <span
                              className="text-danger"
                              onClick={() => userLoggedOut()}
                            >
                              <i className="icon-log-out"></i> Logout
                            </span>
                          </li>
                        </ul>
                      </li>
                    ) : (
                      <li>
                        <a href={`/login`}>
                          <button type="button" className="btn btn-sm">
                            Login
                          </button>
                        </a>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {location && location.pathname === '/' ? (
        <React.Fragment>
          <div
            id="slider"
            className="inspiro-slider slider-fullscreen dots-creative"
            data-fade="true"
          >
            {banner &&
              banner.map((item, idx) => (
                <div
                  key={idx}
                  className="slide kenburns"
                  data-bg-image={item.banner_img_url}
                >
                  <div className="bg-overlay"></div>
                  <div className="container">
                    <div className="slide-captions text-center text-light">
                      <h1>{item.banner_title}</h1>
                      <p>-- deskripsi --</p>
                      <div>
                        <a href="/#" className="btn scroll-to">
                          Explore more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </React.Fragment>
      ) : (
        <div>
          <div
            className="bg-overlay"
            style={{
              width: '100%',
              height: '80px',
              backgroundColor: '#000',
            }}
          ></div>
        </div>
      )}
      <style>
        {`
          .menu {
            transition: all 2s ease;
          }
          .menu::after {
            position: absolute;
            content: '';
            width: 100%;
            height: 3px;
            left: 0;
            right: 0;
            bottom:0;
            background-color: #27bebe !important;
            border-radius: 15px;
          }
          .menu::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            left: 0;
            right: 0;
            top:0;
            background-color: #27bebe !important;
            opacity: 0.2;
            border-radius: 5px 5px 0px 0px;
            z-index: -1;
          }
        `}
      </style>
    </div>
  )
}

import React from 'react'

function App() {
  return (
    <div className="body-inner">
      <header
        id="header"
        className="dark submenu-light"
        data-transparent="true"
        data-fullwidth="true"
      >
        <div className="header-inner">
          <div className="container">
            <div id="logo">
              <a href="/#">
                <span className="logo-default">IKAPUNIJA</span>
                <span className="logo-dark">IKAPUNIJA</span>
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
            <div className="header-extras">
              <ul>
                <li>
                  <a id="btn-search" href="/#">
                    <i className="icon-search"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div id="mainMenu">
              <div className="container">
                <nav>
                  <ul>
                    <li>
                      <a href="/#">Home</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        id="slider"
        className="inspiro-slider slider-fullscreen dots-creative"
        data-fade="true"
      >
        <div
          className="slide kenburns"
          data-bg-image="assets/img/notgeneric_bg3.jpg"
        >
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="slide-captions text-center text-light">
              <h1>WELCOME TO THE OFFICIAL WEBSITE IKAPUNIJA</h1>
              <p>
                Deserunt mollit ut laborum mollit magna. Do adipisicing quis
                ipsum labore. Sunt fugiat consequat tempor sunt consequat
                ullamco laborum aute. Proident exercitation qui mollit eu sit
                commodo culpa ad. Eu ad nisi occaecat qui ea velit. Irure veniam
                aliquip aute laboris velit do laboris sint tempor cupidatat
                reprehenderit consectetur laboris mollit.
              </p>
              <div>
                <a href="#welcome" className="btn scroll-to">
                  Explore more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide kenburns"
          data-bg-image="assets/img/notgeneric_bg3.jpg"
        >
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="slide-captions text-center text-light">
              <h1>WE ARE HIRING</h1>
              <p>
                Non eu nostrud consectetur minim. Sit veniam sint sint proident
                ad duis culpa. Dolor velit tempor aute esse consequat quis et.
                Non excepteur aute fugiat irure culpa ipsum nisi laborum. In
                excepteur sit fugiat velit excepteur sunt. In amet voluptate
                deserunt fugiat anim culpa est culpa mollit incididunt.
              </p>
              <div>
                <a href="#welcome" className="btn scroll-to">
                  Explore more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="welcome" className="p-b-0">
        <div className="container">
          <div
            className="heading-text heading-section text-center m-b-40"
            data-animate="fadeInUp"
          >
            <h2>WELCOME TO THE WORLD OF POLO</h2>
            <span className="lead">
              Create amam ipsum dolor sit amet, Beautiful nature, and rare
              feathers!.
            </span>
          </div>
          <div className="row" data-animate="fadeInUp">
            <div className="col-lg-12">
              <img
                className="img-fluid"
                src="images/other/responsive-1.jpg"
                alt="Welcome to POLO"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

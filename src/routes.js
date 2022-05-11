import Layout from "./layout"

// pages
import Home from "./pages/home"
import AboutUs from "./pages/about-us"
import ContactUs from "./pages/contact-us"
import Blog from "./pages/blog"
import Program from "./pages/program"
import News from "./pages/news"

const Routes = [
  {
    path: "/",
    exact: true,
    layout: Layout,
    component: Home,
  },
  {
    path: "/about-us",
    layout: Layout,
    component: AboutUs,
  },
  {
    path: "/contact-us",
    layout: Layout,
    component: ContactUs,
  },
  {
    path: "/blog",
    layout: Layout,
    component: Blog,
  },
  {
    path: "/news",
    layout: Layout,
    component: News,
  },
  {
    path: "/program",
    layout: Layout,
    component: Program,
  },
]

export default Routes

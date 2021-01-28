import Layout from './layout'
import LayoutSso from './layout/sso'

// Route Views
import Beranda from './pages/beranda'
import BeritaAlumni from './pages/berita-alumni'
import Pengumuman from './pages/pengumuman'
import Agenda from './pages/agenda'
import Galeri from './pages/galeri'
import Cdc from './pages/cdc'
import KontakKami from './pages/kontak-kami'
import StrukturIkapunija from './pages/struktur-ikapunija'
import StrukturDpa from './pages/struktur-dpa'
import VisiMisi from './pages/visi-misi'
import Sejarah from './pages/sejarah'
import Login from './pages/login'
import LoginSso from './pages/login'
import RegisterSso from './pages/register'
import Register from './pages/register'
import Profil from './pages/profil'

const Routes = [
  { path: '/', exact: true, layout: Layout, component: Beranda },
  {
    path: '/berita-alumni',
    exact: true,
    layout: Layout,
    component: BeritaAlumni,
  },
  { path: '/pengumuman', exact: true, layout: Layout, component: Pengumuman },
  { path: '/agenda', exact: true, layout: Layout, component: Agenda },
  { path: '/galeri', exact: true, layout: Layout, component: Galeri },
  { path: '/cdc', exact: true, layout: Layout, component: Cdc },
  { path: '/kontak-kami', exact: true, layout: Layout, component: KontakKami },
  {
    path: '/struktur-ikapunija',
    exact: true,
    layout: Layout,
    component: StrukturIkapunija,
  },
  {
    path: '/struktur-dpa',
    exact: true,
    layout: Layout,
    component: StrukturDpa,
  },
  {
    path: '/profil',
    exact: true,
    layout: Layout,
    component: Profil,
  },
  { path: '/visi-misi', exact: true, layout: Layout, component: VisiMisi },
  { path: '/sejarah', exact: true, layout: Layout, component: Sejarah },
  { path: '/login-old', exact: true, layout: Layout, component: Login },
  { path: '/register-old', exact: true, layout: Layout, component: Register },
  { path: '/login', exact: true, layout: LayoutSso, component: LoginSso },
  {
    path: '/register',
    exact: true,
    layout: LayoutSso,
    component: RegisterSso,
  },
]

export default Routes

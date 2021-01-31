import Layout from './layout'
import LayoutSso from './layout/sso'

// Route Views
import Beranda from './pages/beranda'
import BeritaAlumni from './pages/berita-alumni'
import BeritaAlumniDetail from './pages/berita-alumni-detail'
import Pengumuman from './pages/pengumuman'
import PengumumanDetail from './pages/pengumuman-detail'
import Agenda from './pages/agenda'
import AgendaDetail from './pages/agenda-detail'
import Galeri from './pages/galeri'
import GaleriDetail from './pages/galeri-detail'
import Cdc from './pages/cdc'
import CdcDetail from './pages/cdc-detail'
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
  {
    path: '/berita-alumni/detail/:id',
    exact: true,
    layout: Layout,
    component: BeritaAlumniDetail,
  },
  { path: '/pengumuman', exact: true, layout: Layout, component: Pengumuman },
  {
    path: '/pengumuman/detail/:id',
    exact: true,
    layout: Layout,
    component: PengumumanDetail,
  },
  { path: '/agenda-program', exact: true, layout: Layout, component: Agenda },
  {
    path: '/agenda-program/detail/:id',
    exact: true,
    layout: Layout,
    component: AgendaDetail,
  },
  { path: '/galeri', exact: true, layout: Layout, component: Galeri },
  {
    path: '/galeri/detail/:id',
    exact: true,
    layout: Layout,
    component: GaleriDetail,
  },
  { path: '/cdc', exact: true, layout: Layout, component: Cdc },
  {
    path: '/cdc/detail/:id',
    exact: true,
    layout: Layout,
    component: CdcDetail,
  },
  { path: '/kontak-kami', exact: true, layout: Layout, component: KontakKami },
  {
    path: '/tentang-kami/struktur-ikapunija',
    exact: true,
    layout: Layout,
    component: StrukturIkapunija,
  },
  {
    path: '/tentang-kami/struktur-dpa',
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
  {
    path: '/tentang-kami/visi-misi',
    exact: true,
    layout: Layout,
    component: VisiMisi,
  },
  {
    path: '/tentang-kami/sejarah',
    exact: true,
    layout: Layout,
    component: Sejarah,
  },
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

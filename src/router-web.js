import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
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
import Register from './pages/register'

export default function RouterWeb() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Beranda} />
      <Route path="/berita-alumni" exact component={BeritaAlumni} />
      <Route path="/berita-alumni/:id" exact component={BeritaAlumni} />
      <Route path="/pengumuman" exact component={Pengumuman} />
      <Route path="/agenda" exact component={Agenda} />
      <Route path="/galeri" exact component={Galeri} />
      <Route path="/cdc" exact component={Cdc} />
      <Route path="/kontak-kami" exact component={KontakKami} />
      <Route path="/struktur-ikapunija" exact component={StrukturIkapunija} />
      <Route path="/struktur-dpa" exact component={StrukturDpa} />
      <Route path="/visi-misi" exact component={VisiMisi} />
      <Route path="/sejarah" exact component={Sejarah} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </BrowserRouter>
  )
}

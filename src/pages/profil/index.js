import React from 'react'
import {
  ListRegion,
  ListProfesi,
  ListJurusan,
  ListProdi,
  GetProfileMe,
} from '../../api'
import { imageKtp, imageProfil } from '../../const/env'
import LoadingComponent from './loading-component'

export default function Profile() {
  const [listRegion, setListRegion] = React.useState()
  const [profesi, setProfesi] = React.useState()
  const [jurusan, setJurusan] = React.useState()
  const [prodi, setProdi] = React.useState()
  const [data, setData] = React.useState()
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    ListRegion().then((res) => {
      setListRegion(res)
    })
    ListProfesi().then((res) => {
      setProfesi(res && res.Data)
    })
    ListJurusan().then((res) => {
      setJurusan(res && res.Data)
    })
  }, [])

  React.useEffect(() => {
    setIsLoading(true)
    async function fetchUserData() {
      await GetProfileMe().then((res) => {
        setIsLoading(false)
        const { data } = res
        setData(data)
        if (data) {
          ListProdi(data.jurusan_id).then((res) => {
            setProdi(res && res.Data)
          })
        }
      })
    }
    fetchUserData()
  }, [])

  return (
    <React.Fragment>
      <section id="page-title">
        <div className="container">
          <div className="page-title">
            <h1>Profil</h1>
          </div>
          <div className="breadcrumb">
            <ul>
              <li>
                <a href="/">Beranda</a>
              </li>
              <li className="active">
                <a href="/profil">Profilku</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="page-content">
        <div className="container">
          {!data && isLoading ? (
            <LoadingComponent />
          ) : data ? (
            <div>
              <div className="row">
                <div className="col-lg-7 col-md-7 col-xs-12 center p-50 background-white b-r-6">
                  <div className="panel">
                    <div className="panel-body">
                      <div className="row d-flex justify-content-end">
                        <a href="/profil/edit" className="btn btn-xs">
                          {' '}
                          <i className="icon-edit"></i> Edit data
                        </a>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div
                            className="form-group"
                            style={{
                              display: 'flex',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              flexDirection: 'column',
                            }}
                          >
                            <label>Foto Profil </label>
                            {data.foto_ktp ? (
                              <img
                                src={`${imageProfil}/${data.foto_profil}`}
                                alt=""
                                onError={(e) => {
                                  e.target.src =
                                    'https://via.placeholder.com/150'
                                }}
                                width="120px"
                                style={{ borderRadius: '50%' }}
                              />
                            ) : (
                              `-`
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Nama Alumni </label>
                            <p style={{ color: '#000' }}>{data.nama_alumni}</p>
                          </div>
                          <div className="form-group">
                            <label>Email </label>
                            <p style={{ color: '#000' }}>{data.email}</p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Alamat </label>
                            <p style={{ color: '#000' }}>{data.alamat}</p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>No Hp </label>
                            <p style={{ color: '#000' }}>{data.contact}</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Angkatan </label>
                            <p style={{ color: '#000' }}>{data.angkatan}</p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Jurusan </label>
                            <p style={{ color: '#000' }}>
                              {jurusan &&
                                jurusan.filter(
                                  (item) => item.id === data.jurusan_id,
                                )[0].nama_jurusan}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Program Studi </label>
                            <p style={{ color: '#000' }}>
                              {prodi &&
                                prodi.filter(
                                  (item) => item.id === data.prodi_id,
                                )[0].nama_prodi}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Kebangsaan </label>
                            <p style={{ color: '#000' }}>
                              {listRegion &&
                                listRegion.filter(
                                  (item) => item.alpha2Code === data.negara_id,
                                )[0].name}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Hobi</label>
                            <p style={{ color: '#000' }}>{data.hobi}</p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Profesi </label>
                            <p style={{ color: '#000' }}>
                              {profesi &&
                                profesi.filter(
                                  (item) => item.id === data.profesi_id,
                                )[0].nama_profesi}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form show">
                            <div className="form-group">
                              <label>Jabatan</label>
                              <p style={{ color: '#000' }}>
                                {data.nama_profesi ? data.nama_profesi : '-'}
                              </p>
                            </div>
                            <div className="form-group">
                              <label>Nama Perusahaan/Bisnis </label>
                              <p style={{ color: '#000' }}>
                                {data.nama_profesi ? data.nama_profesi : '-'}
                              </p>
                            </div>

                            <div className="form-group">
                              <label>Jumlah Karyawan yang dimiliki </label>
                              <p style={{ color: '#000' }}>
                                {data.jumlah_pegawai}
                              </p>
                            </div>

                            <div className="form-group">
                              <label>Pendapatan </label>
                              <p style={{ color: '#000' }}>{data.pendapatan}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>NIK </label>
                            <p style={{ color: '#000' }}>{data.nik}</p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Foto KTP </label>
                            {data.foto_ktp ? (
                              <img
                                src={`${imageKtp}/${data.foto_ktp}`}
                                alt=""
                                onError={(e) => {
                                  e.target.src =
                                    'https://via.placeholder.com/150'
                                }}
                                width="150px"
                                height="100px"
                              />
                            ) : (
                              `-`
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <i className="far fa-sad-tear fa-2x"></i>
              <p>Data tidak ditemukan</p>
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  )
}

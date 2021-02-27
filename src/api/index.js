import {
  WEB_HEADERS_GET,
  WEB_HEADERS_POST,
  WEB_HEADERS_POST2,
  WEB_HEADERS_POST_LOGOUT,
} from '../const/vars'
import {
  urlApi,
  urlListRegion,
  imageBanner,
  imageBeritaAlumni,
  imageCdc,
  imagePengumuman,
  imageAgenda,
  imageGallery,
  imageAlbum,
  apiToken,
} from '../const/env'
import Axios from 'axios'
import { userLoggedIn } from '../utils/helpers'

export const ListRegion = async () => {
  try {
    const options = {
      method: 'GET',
    }
    const result = await fetch(`${urlListRegion}`, options)
    const { status } = result
    const response = result.json()
    if (status === 200) {
      return response
    }
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const ListProfesi = async () => {
  try {
    const options = {
      headers: {
        ...WEB_HEADERS_GET,
      },
      method: 'GET',
    }
    const result = await fetch(`${urlApi}/profesi`, options)
    const { status } = result
    const response = result.json()
    if (status === 200) {
      return response
    }
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const ListJurusan = async () => {
  try {
    const options = {
      headers: {
        ...WEB_HEADERS_GET,
      },
      method: 'GET',
    }
    const result = await fetch(`${urlApi}/jurusan`, options)
    const { status } = result
    const response = result.json()
    if (status === 200) {
      return response
    }
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const ListProdi = async (id) => {
  try {
    const options = {
      headers: {
        ...WEB_HEADERS_GET,
      },
      method: 'GET',
    }
    const result = await fetch(`${urlApi}/prodi/${id}`, options)
    const { status } = result
    const response = result.json()
    if (status === 200) {
      return response
    }
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const ListBanner = async () => {
  try {
    const result = await Axios({
      method: 'GET',
      url: `${urlApi}/banner`,
    })
    const { data } = result
    if (data && data.StatusCode === 200) {
      const bannerData =
        data &&
        data.Data &&
        data.Data.map((item) => ({
          banner_id: item.id,
          banner_img_url: `${imageBanner}/${item.banner}`,
          banner_title: item.judul,
          banner_desc: item.desc_singkat,
          banner_link: item.link,
        }))
      return bannerData
    } else {
      return 'undefined'
    }
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const ListStruktur = async (params) => {
  try {
    const result = await Axios({
      method: 'GET',
      url: `${urlApi}/struktur`,
      headers: {
        apiToken: apiToken,
        type: 'web',
        typeLevel: params,
      },
    })
    const { data } = result
    if (data && data.StatusCode === 200) {
      return data && data.Data
    }
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const ListBeritaAlumni = async () => {
  try {
    const options = {
      method: 'GET',
    }
    const result = await fetch(`${urlApi}/berita`, options)
    const { status } = result
    const response = result.json()
    if (status === 200) {
      const { Data } = await response
      const beritaAlumni =
        Data &&
        Data.map((item) => ({
          news_id: item.id,
          news_title: item.judul,
          news_desc: item.review_singkat,
          news_img_url: `${imageBeritaAlumni}/${item.foto}`,
          news_category: item.category,
          news_date: item.tanggal,
        }))
      return {
        data: beritaAlumni,
        error: false,
      }
    } else {
      return {
        data: null,
        error: true,
      }
    }
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const ListDetailBeritaAlumni = async (id) => {
  try {
    const options = {
      method: 'GET',
    }
    const result = await fetch(`${urlApi}/berita/${id}`, options)
    const { status } = result
    const response = result.json()
    if (status === 200) {
      const { Data } = await response
      const beritaDetailAlumni = {
        news_id: Data.id,
        news_title: Data.judul,
        news_subtitle: Data.review_singkat,
        news_desc: Data.isi,
        news_img_url: `${imageBeritaAlumni}/${Data.foto}`,
        news_category: Data.category,
        news_priority: Data.priority,
        news_date: Data.tanggal,
      }
      return {
        data: beritaDetailAlumni,
        error: false,
      }
    } else {
      return {
        data: null,
        error: true,
      }
    }
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const ListPengumuman = async () => {
  try {
    const options = {
      method: 'GET',
    }
    const result = await fetch(`${urlApi}/pengumuman`, options)
    const { status } = result
    const response = result.json()
    if (status === 200) {
      const { Data } = await response
      const pengumuman =
        Data &&
        Data.map((item) => ({
          notice_id: item.id,
          notice_title: item.judul,
          notice_desc: item.review_singkat,
          notice_img_url: `${imagePengumuman}/${item.foto}`,
          notice_category: item.category,
          notice_date: item.tanggal,
        }))
      return {
        data: pengumuman,
        error: false,
      }
    } else {
      return {
        data: null,
        error: true,
      }
    }
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const ListDetailPengumuman = async (id) => {
  try {
    const options = {
      method: 'GET',
    }
    const result = await fetch(`${urlApi}/pengumuman/${id}`, options)
    const { status } = result
    const response = result.json()
    if (status === 200) {
      const { Data } = await response
      const beritaDetailPengumuman = {
        notice_id: Data.id,
        notice_title: Data.judul,
        notice_subtitle: Data.review_singkat,
        notice_desc: Data.isi,
        notice_img_url: `${imagePengumuman}/${Data.foto}`,
        notice_category: Data.category,
        notice_priority: Data.priority,
        notice_date: Data.tanggal,
      }
      return {
        data: beritaDetailPengumuman,
        error: false,
      }
    } else {
      return {
        data: null,
        error: true,
      }
    }
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const ListAgenda = async () => {
  try {
    const options = {
      headers: {
        ...WEB_HEADERS_GET,
        sort: 'tanggal',
        sortType: 'desc',
      },
      method: 'GET',
    }
    const result = await fetch(`${urlApi}/agenda`, options)
    const { status } = result
    const response = result.json()
    if (status === 200) {
      const { Data } = await response
      const agenda =
        Data &&
        Data.map((item) => ({
          agenda_id: item.id,
          agenda_title: item.judul,
          agenda_desc: item.review_singkat,
          agenda_img_url: `${imageAgenda}/${item.foto}`,
          agenda_category: item.category,
          agenda_date: item.tanggal,
        }))
      return {
        data: agenda,
        error: false,
      }
    } else {
      return {
        data: null,
        error: true,
      }
    }
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const ListDetailAgenda = async (id) => {
  try {
    const options = {
      method: 'GET',
    }
    const result = await fetch(`${urlApi}/agenda/${id}`, options)
    const { status } = result
    const response = result.json()
    if (status === 200) {
      const { Data } = await response
      const detailAgenda = {
        agenda_id: Data.id,
        agenda_title: Data.judul,
        agenda_subtitle: Data.review_singkat,
        agenda_desc: Data.isi,
        agenda_img_url: `${imageAgenda}/${Data.foto}`,
        agenda_priority: Data.priority,
        agenda_date: Data.tanggal,
      }
      return {
        data: detailAgenda,
        error: false,
      }
    } else {
      return {
        data: null,
        error: true,
      }
    }
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const ListGaleri = async () => {
  try {
    const options = {
      headers: {
        ...WEB_HEADERS_GET,
      },
      method: 'GET',
    }
    const result = await fetch(`${urlApi}/album`, options)
    const { status } = result
    const response = result.json()
    if (status === 200) {
      const { Data } = await response
      const galeri =
        Data &&
        Data.map((item) => ({
          galeri_id: item.id,
          galeri_title: item.nama,
          galeri_img_cover: `${imageAlbum}/${item.logo}`,
        }))
      return {
        data: galeri,
        error: false,
      }
    } else {
      return {
        data: null,
        error: true,
      }
    }
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const ListDetailGaleri = async (id) => {
  try {
    const options = {
      headers: {
        ...WEB_HEADERS_GET,
      },
      method: 'GET',
    }
    const result = await fetch(`${urlApi}/album/${id}`, options)
    const { status } = result
    const response = result.json()
    if (status === 200) {
      const { Data } = await response
      const detailgaleri =
        Data &&
        Data.map((item) => ({
          galeri_id: item.id,
          galeri_image_url: `${imageGallery}/${item.foto}`,
          galeri_active: item.is_active === 'Y' ? true : false,
        }))
      return {
        data: detailgaleri,
        error: false,
      }
    } else {
      return {
        data: null,
        error: true,
      }
    }
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const ListCdc = async () => {
  try {
    const options = {
      headers: {
        ...WEB_HEADERS_GET,
      },
      method: 'GET',
    }
    const result = await fetch(`${urlApi}/loker`, options)
    const { status } = result
    const response = result.json()
    if (status === 200) {
      const { Data } = await response
      const cdc =
        Data &&
        Data.map((item) => ({
          cdc_id: item.id,
          cdc_title: item.judul,
          cdc_desc: item.review_singkat,
          cdc_category: item.category,
          cdc_start_date: item.start_date,
          cdc_end_date: item.end_date,
          cdc_date: item.tanggal,
        }))
      return {
        data: cdc,
        error: false,
      }
    } else {
      return {
        data: null,
        error: true,
      }
    }
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const ListDetailCdc = async (id) => {
  try {
    const options = {
      headers: {
        ...WEB_HEADERS_GET,
      },
      method: 'GET',
    }
    const result = await fetch(`${urlApi}/loker/${id}`, options)
    const { status } = result
    const response = result.json()
    if (status === 200) {
      const { Data } = await response
      const detailcdc = {
        cdc_id: Data.id,
        cdc_title: Data.judul,
        cdc_desc: Data.review_singkat,
        cdc_img_url: `${imageCdc}/${Data.foto}`,
        cdc_category: Data.category,
        cdc_start_date: Data.start_date,
        cdc_end_date: Data.end_date,
        cdc_date: Data.tanggal,
      }
      return {
        data: detailcdc,
        error: false,
      }
    } else {
      return {
        data: null,
        error: true,
      }
    }
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const PostLogin = async (params) => {
  try {
    let formData = new FormData()
    formData.append('email', params.email)
    formData.append('password', params.password)
    formData.append('mode', params.mode)
    let body = {
      error: false,
      message: '',
      data: null,
    }
    const options = {
      headers: {
        ...WEB_HEADERS_POST,
      },
      body: formData,
      method: 'POST',
    }
    const result = await fetch(`${urlApi}/login`, options)
    const res = result.json()
    const response = await res
    if (response.Error && response.Error.email) {
      body.error = true
      body.message = 'Format email salah'
    } else if (response.Error && response.Message) {
      body.error = true
      body.message = response.Message
    } else {
      body.error = false
      body.message = 'Login berhasil'
      body.data = response.Data
    }
    return body
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const PutUpdateDataProfile = async (params) => {
  try {
    let body = {
      error: false,
      message: '',
    }
    const result = await Axios({
      url: `${urlApi}/updateProfile`,
      method: 'PUT',
      data: params,
      headers: {
        apiToken: apiToken,
        email: userLoggedIn().email,
        token: userLoggedIn().token,
      },
    })
    console.log('dapetnya ==>', result)
    const { data } = result
    if (data && data.StatusCode === 200) {
      body.message = 'Update data berhasil'
    } else {
      body.error = true
      body.message = 'Update data gagal, periksa data kembali sebelum disimpan'
    }
    return body
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const PostRegister = async (params) => {
  try {
    let body = {
      error: false,
      message: '',
    }
    const result = await Axios({
      method: 'POST',
      url: `${urlApi}/register`,
      data: params,
      headers: {
        ...WEB_HEADERS_POST2,
        type: 'web',
      },
    })
    const { data } = result
    if (data && data.StatusCode === 200) {
      body.message =
        'Registrasi berhasil, harap cek email anda untuk melakukan verifikasi akun'
    } else if (data && data.StatusCode === 401) {
      body.error = true
      body.message = data && data.Message
    } else if (data && data.Error && data.Error.email.length >= 1) {
      body.error = true
      body.message = 'Format email masih salah'
    } else {
      body.error = true
      body.message = 'Registrasi gagal. periksa kembali data yang dimasukkan'
    }
    return body
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const PostKontakKami = async (params) => {
  try {
    let body = {
      error: false,
      message: '',
    }
    const result = await Axios({
      method: 'POST',
      url: `${urlApi}/contact`,
      data: params,
      headers: {
        apiToken: apiToken,
      },
    })
    const { data } = result
    if (data && data.StatusCode === 200) {
      body.message = 'Pesan berhasil terkirim'
    } else {
      body.error = true
      body.message = 'Pesan gagal terkirim'
    }
    return body
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const PostLogout = async (params) => {
  try {
    const options = {
      headers: {
        ...WEB_HEADERS_POST_LOGOUT,
        token: params.token,
        email: params.email,
      },
      method: 'PUT',
    }
    const result = await fetch(`${urlApi}/logout`, options)
    const { status } = result
    if (status === 200) {
      return {
        error: false,
      }
    } else {
      return {
        error: true,
      }
    }
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const ForgotPassword = async (params) => {
  try {
    let formData = new FormData()
    formData.append('email', params.email)
    formData.append('mode', 'web')
    let body = {
      error: false,
      message: '',
    }
    const result = await Axios({
      method: 'POST',
      url: `${urlApi}/forgotPassword`,
      data: formData,
      headers: {
        ...WEB_HEADERS_POST,
      },
    })
    const { data } = result
    if (data && data.StatusCode === 200) {
      body.message = data && data.Message
    } else {
      body.error = true
      body.message = data && data.Message
    }
    return body
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const VerifikasiPassword = async (params) => {
  try {
    let formData = new FormData()
    formData.append('email', params.email)
    formData.append('verify_code', params.verify_code)
    formData.append('mode', 'web')
    let body = {
      error: false,
      message: '',
    }
    const result = await Axios({
      method: 'POST',
      url: `${urlApi}/verifyForgotPassword`,
      data: formData,
      headers: {
        ...WEB_HEADERS_POST,
      },
    })
    const { data } = result
    if (data && data.StatusCode === 200) {
      body.message = data && data.Message
    } else {
      body.error = true
      body.message = data && data.Message
    }
    return body
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const ChangePassword = async (params) => {
  try {
    let formData = new FormData()
    formData.append('email', params.email)
    formData.append('password', params.password)
    formData.append('cPassword', params.cPassword)
    formData.append('verify_code', params.verify_code)
    formData.append('mode', 'web')
    let body = {
      error: false,
      message: '',
    }
    const result = await Axios({
      method: 'POST',
      url: `${urlApi}/updatePassword`,
      data: formData,
      headers: {
        ...WEB_HEADERS_POST,
      },
    })
    const { data } = result
    if (data && data.StatusCode === 200) {
      body.message = 'Password berhasil diganti'
    } else {
      body.error = true
      body.message = data && data.Message
    }
    return body
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const GetProfileMe = async () => {
  try {
    let body = {
      error: false,
      data: [],
    }
    const result = await Axios({
      method: 'GET',
      url: `${urlApi}/profile`,
      headers: {
        apiToken: apiToken,
        type: 'user',
        token: userLoggedIn().token,
        email: userLoggedIn().email,
      },
    })
    const { data } = result
    if (data && data.StatusCode === 200) {
      body.data = data && data.Data
    } else {
      body.error = true
    }
    return body
  } catch (error) {
    console.log('err ===>', error)
  }
}

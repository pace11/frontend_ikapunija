import { urlApi } from '../const/env'
import { WEB_HEADERS_GET } from '../const/vars'
import {
  imageBanner,
  imageBeritaAlumni,
  imageAgenda,
  imageGallery,
} from '../const/env'

export const ListRegion = async () => {
  try {
    const options = {
      method: 'GET',
    }
    const result = await fetch('https://restcountries.eu/rest/v2/all', options)
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

export const ListBanner = async () => {
  try {
    const options = {
      method: 'GET',
    }
    const result = await fetch(`${urlApi}/banner`, options)
    const { status } = result
    const response = result.json()
    if (status === 200) {
      const { Data } = await response
      const bannerData =
        Data &&
        Data.map((item) => ({
          banner_id: item.id,
          banner_img_url: `${imageBanner}/${item.banner}`,
          banner_title: item.judul,
          banner_link: item.link,
        }))
      return bannerData
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
      return beritaAlumni
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
      return beritaDetailAlumni
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
          notice_img_url: `${imageBeritaAlumni}/${item.foto}`,
          notice_category: item.category,
          notice_date: item.tanggal,
        }))
      return pengumuman
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
        notice_img_url: `${imageBeritaAlumni}/${Data.foto}`,
        notice_category: Data.category,
        notice_priority: Data.priority,
        notice_date: Data.tanggal,
      }
      return beritaDetailPengumuman
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
      return agenda
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
        agenda_img_url: `${imageBeritaAlumni}/${Data.foto}`,
        agenda_priority: Data.priority,
        agenda_date: Data.tanggal,
      }
      return detailAgenda
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
        }))
      return galeri
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
      return detailgaleri
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
      return cdc
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
        cdc_img_url: `${imageBeritaAlumni}/${Data.foto}`,
        cdc_category: Data.category,
        cdc_start_date: Data.start_date,
        cdc_end_date: Data.end_date,
        cdc_date: Data.tanggal,
      }
      return detailcdc
    }
  } catch (error) {
    console.log('err ===>', error)
  }
}

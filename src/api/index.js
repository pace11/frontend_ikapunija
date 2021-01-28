import { urlApi } from '../const/env'
import { WEB_HEADERS_GET } from '../const/vars'

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
    return error
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
    return error
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
      return response
    }
  } catch (error) {
    return error
  }
}

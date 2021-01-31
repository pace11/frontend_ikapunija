import { apiToken } from './env'

const WEB_HEADERS_GET = {
  apiToken: apiToken,
  type: 'web',
  offset: '0',
}

const WEB_HEADERS_POST = {
  apiToken: apiToken,
  mode: 'cors',
}

const WEB_HEADERS_POST_LOGOUT = {
  apiToken: apiToken,
  type: 'user',
}

export { WEB_HEADERS_GET, WEB_HEADERS_POST, WEB_HEADERS_POST_LOGOUT }

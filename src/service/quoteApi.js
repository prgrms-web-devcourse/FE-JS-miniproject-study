import { requestGet } from '../utils/api.js'

const API_END_POINT = 'https://free-quotes-api.herokuapp.com/'

export const fetchQuote = async () => {
  return await requestGet(API_END_POINT)
}

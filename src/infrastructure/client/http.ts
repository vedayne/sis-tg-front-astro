import axios, { type AxiosInstance } from 'axios'
import { environments } from '../config'
import { getToken } from '../utils/get-token'

/*let tokenUser: string | undefined
tokenUser = getToken()*/

function createApiClient( baseURL: string, token?: string ): AxiosInstance {
  return axios.create({
    baseURL,
    timeout: 600 * 1000,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...( token && { 'Authorization': `Bearer ${ token }` } ),
    }
  })
}

export const signInApiClient = createApiClient( environments.BASE_API_URL )
//export const baseApiClient = createApiClient( environments.BASE_API_URL, tokenUser )

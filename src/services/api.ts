import axios from 'axios'
import { Client, query } from 'faunadb'

export const zipCodeAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ZIP_CODE,
})

zipCodeAPI.interceptors.response.use(
  (response) => response.data,
  (error) => error?.message,
)

export const ibgeUfAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_IBGE_UF,
})

ibgeUfAPI.interceptors.response.use(
  (response) => response.data,
  (error) => error?.message,
)

export const faunaAPI = new Client({
  secret: process.env.NEXT_PUBLIC_FAUNA_KEY as string,
})

export const queryFauna = query

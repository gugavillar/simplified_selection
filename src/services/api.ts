import axios from 'axios'
import { Client } from 'fauna'

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

export const cloudinaryAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CLOUDINARY_URL,
})

cloudinaryAPI.interceptors.response.use(
  (response) => response,
  (error) => error?.message,
)

export const faunaClient = new Client({
  secret: process.env.NEXT_PUBLIC_FAUNA_KEY,
})

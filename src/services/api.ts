import axios from 'axios'

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

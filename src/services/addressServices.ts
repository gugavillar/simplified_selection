import { zipCodeAPI, ibgeUfAPI } from './api'

type GetAddressFromZipCodeReturn = {
  bairro: string
  complemento: string
  localidade: string
  logradouro: string
  uf: string
  erro?: boolean
}

export const getAddressFromZipCode = async (
  zipCode: string,
): Promise<GetAddressFromZipCodeReturn> =>
  await zipCodeAPI.get(`/${zipCode}/json`)

type GetBrazilUfReturn = {
  id: number
  sigla: string
  nome: string
}

export const getBrazilUf = async (): Promise<Array<GetBrazilUfReturn>> =>
  await ibgeUfAPI.get('/localidades/estados')

type GetCitiesFromUfReturn = {
  id: number
  nome: string
}

export const getCitiesFromUf = async (
  uf: string,
): Promise<Array<GetCitiesFromUfReturn>> =>
  await ibgeUfAPI.get(`/localidades/estados/${uf}/municipios`)

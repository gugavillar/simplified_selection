import { CandidatesKeys } from '@/types/candidates'

import {
  formatPhone,
  formatTaxpayerRegistration,
  formatZipCode,
  formatterDateToBrazilianDate,
} from '.'

type KeyOfFormatters =
  | 'zipCode'
  | 'taxpayerRegistration'
  | 'dateOfExpedition'
  | 'dateOfBirth'
  | 'phone'

export const candidateObjectFormatFunction = {
  zipCode: (value: string) => formatZipCode(value),
  taxpayerRegistration: (value: string) => formatTaxpayerRegistration(value),
  dateOfExpedition: (value: string) => formatterDateToBrazilianDate(value),
  dateOfBirth: (value: string) => formatterDateToBrazilianDate(value),
  phone: (value: string) => formatPhone(value),
}

export const candidateDataFormatters = (value: string, key: CandidatesKeys) => {
  if (key in candidateObjectFormatFunction) {
    return candidateObjectFormatFunction[key as KeyOfFormatters](value)
  }
  return value
}

export enum CandidateKeys {
  name = 'Nome do candidato',
  zipCode = 'CEP',
  taxpayerRegistration = 'CPF',
  dateOfExpedition = 'Data de expedição do RG',
  dateOfBirth = 'Data de nascimento',
  role = 'Cargo a concorrer',
  gender = 'Gênero',
  race = 'Cor e raça',
  phone = 'Telefone',
  email = 'Email',
  mother = 'Nome da mãe',
  identificationDocument = 'Número do RG',
  pcd = 'Pessoa com deficiência',
  socialNumber = 'NIS',
  maritalStatus = 'Estado civil',
  address = 'Endereço',
  addressNumber = 'N˚',
  addOnAddress = 'Complemento',
  neighborhood = 'Bairro',
  state = 'Estado',
  city = 'Cidade',
}

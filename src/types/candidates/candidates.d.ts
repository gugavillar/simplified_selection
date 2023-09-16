import {
  COLOR_RACE,
  GENDER,
  MARITAL_STATUS,
  YES_OR_NO,
} from '@/modules/Registrations/constants'

import { UploadCloudinaryResponse } from '../uploads'

export declare type CandidateFormDataType = {
  role: string
  taxpayerRegistration: string
  name: string
  gender: string
  race: string
  dateOfBirth: string
  phone: string
  email: string
  mother: string
  identificationDocument: string
  dateOfExpedition: string
  pcd: string
  socialNumber: string
  maritalStatus: string
  address: {
    zipCode: string
    location: string
    number: string
    addOn: string
    neighborhood: string
    state: string
    city: string
  }
}

export declare type CandidateDatabaseType = {
  id: string
  role: string
  coll: string
  ts: TDateISO
  taxpayerRegistration: string
  name: string
  gender: (typeof GENDER)[number]['value']
  race: (typeof COLOR_RACE)[number]['value']
  dateOfBirth: TDateISODate
  phone: string
  email: string
  mother: string
  identificationDocument: string
  dateOfExpedition: TDateISODate
  pcd: (typeof YES_OR_NO)[number]['value']
  socialNumber: string
  maritalStatus: (typeof MARITAL_STATUS)[number]['value']
  address: {
    zipCode: string
    location: string
    number: string
    addOn: string
    neighborhood: string
    state: string
    city: string
  }
  uploads: Array<UploadCloudinaryResponse>
}

export declare type CandidatesKeysWithoutUploadsAndAddressType = keyof Omit<
  CandidateDatabaseType,
  'id' | 'coll' | 'ts' | 'uploads' | 'address'
>

export declare type CandidateKeysAddressType = keyof Pick<
  CandidateDatabaseType,
  'address'
>['address']

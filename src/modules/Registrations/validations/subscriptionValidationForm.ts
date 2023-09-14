import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {
  birthDateSchema,
  documentExpeditionDateSchema,
  emailSchema,
  phoneSchema,
  taxpayerRegistrationSchema,
  transformDateIntoISODate,
  zipCodeSchema,
} from '@/helpers'
import {
  COLOR_RACE,
  GENDER,
  MARITAL_STATUS,
  YES_OR_NO,
} from '@/modules/Registrations/constants'

yup.setLocale({
  mixed: { required: 'Campo obrigatório' },
  string: { email: 'E-mail inválido' },
})

export const subscriptionFormResolver = yupResolver(
  yup.object().shape({
    taxpayerRegistration: taxpayerRegistrationSchema(),
    name: yup.string().required(),
    gender: yup
      .string()
      .required()
      .oneOf(
        [...GENDER.map((gender) => gender.value)],
        'Selecione uma das opções',
      ),
    race: yup
      .string()
      .required()
      .oneOf(
        [...COLOR_RACE.map((gender) => gender.value)],
        'Selecione uma das opções',
      ),
    dateOfBirth: birthDateSchema(),
    phone: phoneSchema(),
    email: emailSchema(),
    mother: yup.string().required(),
    identificationDocument: yup.string().trim().required(),
    dateOfExpedition: documentExpeditionDateSchema(),
    maritalStatus: yup
      .string()
      .required()
      .oneOf(
        [...MARITAL_STATUS.map((status) => status.value)],
        'Selecione uma das opções',
      ),
    pcd: yup
      .string()
      .required()
      .oneOf(
        [...YES_OR_NO.map((status) => status.value)],
        'Selecione uma das opções',
      ),
    socialNumber: yup
      .string()
      .min(11, 'Número do NIS é composto por 11 dígitos')
      .trim(),
    zipCode: zipCodeSchema(),
    address: yup.string().required(),
    addressNumber: yup.string().required(),
    addOnAddress: yup.string().default(''),
    neighborhood: yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
  }),
)

export const roleSubscriptionResolver = yupResolver(
  yup.object().shape({
    role: yup.string().required(),
  }),
)

export const uploadSubscriptionResolver = yupResolver(
  yup.object().shape({
    taxpayerRegistration: taxpayerRegistrationSchema(),
    dateOfBirth: transformDateIntoISODate(),
    phone: phoneSchema(),
    zipCode: zipCodeSchema(),
    dateOfExpedition: transformDateIntoISODate(),
    identificationDocument: yup.string().trim().required(),
    socialNumber: yup.string().trim(),
    documents: yup
      .array()
      .required()
      .min(1, 'Necessário ter no mínimo 1 arquivo'),
  }),
)

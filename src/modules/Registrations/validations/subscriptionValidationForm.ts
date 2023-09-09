import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {
  dateSchema,
  phoneSchema,
  taxpayerRegistrationSchema,
  zipCodeSchema,
} from '@/helpers'

import { GENDER, MARITAL_STATUS } from '../constants/subscriptionFormConstants'

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
    maritalStatus: yup
      .string()
      .required()
      .oneOf(
        [...MARITAL_STATUS.map((status) => status.value)],
        'Selecione uma das opções',
      ),
    dateOfBirth: dateSchema(),
    phone: phoneSchema(),
    email: yup.string().email().required(),
    zipCode: zipCodeSchema(),
  }),
)

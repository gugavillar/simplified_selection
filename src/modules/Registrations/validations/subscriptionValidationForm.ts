import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {
  dateSchema,
  phoneSchema,
  taxpayerRegistrationSchema,
  zipCodeSchema,
} from '@/helpers'
import { GENDER, MARITAL_STATUS } from '@/modules/Registrations/constants'

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

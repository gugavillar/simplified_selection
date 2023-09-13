import {
  validateCPF,
  validateCep,
  validateEmail,
  validatePhone,
} from 'validations-br'
import * as yup from 'yup'

import { formatterDate, isValidDate } from '.'

export const dateSchema = () =>
  yup
    .string()
    .required()
    .test('isValidDate', 'Digite uma data válida', (value) =>
      isValidDate(value),
    )

export const transformDate = () =>
  yup.string().transform((value) => formatterDate(value))

export const phoneSchema = () =>
  yup
    .string()
    .required()
    .test('isValidPhone', 'Telefone inválido', (value) => validatePhone(value))
    .transform((value) => value.replace(/\D/g, ''))

export const taxpayerRegistrationSchema = () =>
  yup
    .string()
    .required()
    .test('valid-taxpayerRegistration', 'CPF inválido', (value) =>
      validateCPF(value),
    )
    .transform((value) => value.replace(/\D/g, ''))

export const zipCodeSchema = () =>
  yup
    .string()
    .required()
    .test('isValidZipCode', 'Digite um CEP válido', (value) =>
      validateCep(value),
    )
    .transform((zipCode) => zipCode.replace(/-/g, ''))

export const emailSchema = () =>
  yup
    .string()
    .email()
    .required()
    .test('isValidEmail', 'Digite um email válido', (value) =>
      validateEmail(value),
    )

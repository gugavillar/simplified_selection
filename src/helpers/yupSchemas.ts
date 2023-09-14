import {
  validateCPF,
  validateCep,
  validateEmail,
  validatePhone,
} from 'validations-br'
import * as yup from 'yup'

import {
  formatterDateToISODate,
  isFutureDateFromToday,
  isValidBirthDate,
  isValidExpeditionDocumentDate,
} from '.'

export const birthDateSchema = () =>
  yup
    .string()
    .required()
    .test('isValidDate', 'Digite uma data válida', (value, ctx) => {
      if (isFutureDateFromToday(value)) {
        return ctx.createError({
          message: 'Data de nascimento não pode ser uma data futura',
        })
      }

      return isValidBirthDate(value)
    })

export const documentExpeditionDateSchema = () =>
  yup
    .string()
    .required()
    .test('isValidDate', 'Digite uma data válida', (value, ctx) => {
      if (ctx.parent.dateOfBirth === value) {
        return ctx.createError({
          message: 'Data de expedição não pode ser igual a data de nascimento',
        })
      }

      if (isFutureDateFromToday(value)) {
        return ctx.createError({
          message: 'Data de expedição não pode ser uma data futura',
        })
      }

      return isValidExpeditionDocumentDate(value)
    })

export const transformDateIntoISODate = () =>
  yup.string().transform((value) => formatterDateToISODate(value))

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

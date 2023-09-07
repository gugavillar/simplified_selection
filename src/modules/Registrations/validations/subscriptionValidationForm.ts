import { yupResolver } from '@hookform/resolvers/yup'
import { validateCPF } from 'validations-br'
import * as yup from 'yup'

yup.setLocale({
  mixed: { required: 'Campo obrigatório.' },
  string: { email: 'E-mail inválido.' },
})

export const subscriptionFormResolver = yupResolver(
  yup.object().shape({
    taxpayerRegistration: yup
      .string()
      .required()
      .test('valid-taxpayerRegistration', 'CPF inválido', (value) =>
        validateCPF(value),
      ),
    gender: yup.string().required(),
  }),
)

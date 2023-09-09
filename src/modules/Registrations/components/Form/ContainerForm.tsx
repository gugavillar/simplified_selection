'use client'
import { PropsWithChildren } from 'react'

import { useForm, FormProvider } from 'react-hook-form'

import { Button } from '@/components/Forms'

import { subscriptionFormResolver } from '../../validations/subscriptionValidationForm'

type ContainerProps = PropsWithChildren

const defaultValues = {
  taxpayerRegistration: '',
  name: '',
  gender: '',
  maritalStatus: '',
  dateOfBirth: '',
  phone: '',
  email: '',
  zipCode: '',
  address: '',
  number: '',
  addOnAddress: '',
  neighborhood: '',
}

export type SubscriptionFormType = typeof defaultValues

export const Container = ({ children }: ContainerProps) => {
  const methods = useForm({
    defaultValues,
    resolver: subscriptionFormResolver,
  })

  const onSubmitHandler = (values: any) => {
    console.log(values)
  }

  const handleClearForm = () => {
    console.log('limpou')
    methods.reset()
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
        {children}
        <div className="flex gap-6 mt-4 justify-end">
          <Button onClick={handleClearForm} variant="border" type="button">
            Limpar
          </Button>
          <Button type="submit">Cadastrar</Button>
        </div>
      </form>
    </FormProvider>
  )
}

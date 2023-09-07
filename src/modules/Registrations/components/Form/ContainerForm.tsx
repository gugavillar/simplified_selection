'use client'
import { PropsWithChildren } from 'react'

import { useForm, FormProvider } from 'react-hook-form'

import { Button } from '@/components/Forms'

type ContainerProps = PropsWithChildren

export const Container = ({ children }: ContainerProps) => {
  const methods = useForm()

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

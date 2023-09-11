'use client'
import { PropsWithChildren } from 'react'

import {
  useForm,
  FormProvider,
  DefaultValues,
  Resolver,
  SubmitHandler,
  FieldValues,
  ValidationMode,
} from 'react-hook-form'

import { Button } from '@/components'

type ContainerProps<T extends FieldValues> = PropsWithChildren & {
  defaultValues: DefaultValues<T>
  resolver: Resolver<T>
  handleSubmit: SubmitHandler<T>
  mode?: keyof ValidationMode
}

export const FormContainer = <T extends FieldValues>({
  children,
  defaultValues,
  handleSubmit,
  resolver,
  mode = 'onSubmit',
}: ContainerProps<T>) => {
  const methods = useForm<T>({
    defaultValues,
    resolver,
    mode,
  })

  const handleClearForm = () => methods.reset()

  const onSubmitHandler = (values: T) => {
    handleSubmit(values)
    handleClearForm()
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

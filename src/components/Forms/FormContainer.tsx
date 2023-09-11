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

import { ButtonsContainer } from './ButtonsContainer'

export type StepsForm = {
  isClearButton: boolean
  isFirstStep: boolean
  isLastStep: boolean
  handleNextStep: () => void
  handlePreviousStep: () => void
}

type ContainerProps<T extends FieldValues> = PropsWithChildren & {
  defaultValues: DefaultValues<T>
  resolver: Resolver<T>
  handleSubmit: SubmitHandler<T>
  mode?: keyof ValidationMode
  stepForm?: StepsForm
}

export const FormContainer = <T extends FieldValues>({
  children,
  defaultValues,
  handleSubmit,
  resolver,
  mode = 'onSubmit',
  stepForm,
}: ContainerProps<T>) => {
  const methods = useForm<T>({
    defaultValues,
    resolver,
    mode,
  })

  const handleClearForm = () =>
    methods.reset({ ...defaultValues }, { keepDefaultValues: true })

  const onSubmitHandler = (values: T) => {
    if (stepForm && !stepForm.isLastStep) return stepForm.handleNextStep()
    handleSubmit(values)
    handleClearForm()
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
        {children}
        <ButtonsContainer
          handleClearForm={handleClearForm}
          {...(stepForm && {
            stepsForm: {
              ...stepForm,
              trigger: methods.trigger,
              errors: !methods.formState.isValid,
            },
          })}
        />
      </form>
    </FormProvider>
  )
}

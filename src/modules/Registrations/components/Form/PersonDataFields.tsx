'use client'
import { useFormContext, Controller } from 'react-hook-form'

import { Input, Select, MaskedInput } from '@/components/Forms'

import { SubscriptionFormType } from './ContainerForm'

const GENDER = [
  { label: 'Masculino', value: 'Masculino' },
  { label: 'Feminino', value: 'Feminino' },
]

const MARITAL_STATUS = [
  { label: 'Solteiro(a)', value: 'Solteiro(a)' },
  { label: 'Casado(a)', value: 'Casado(a)' },
  { label: 'Separado(a)', value: 'Separado(a)' },
  { label: 'Divorciado(a)', value: 'Divorciado(a)' },
  { label: 'Viúvo(a)', value: 'Viúvo(a)' },
]

export const PersonDataFields = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<SubscriptionFormType>()
  console.log(errors)
  return (
    <div className="space-y-4">
      <div className="flex gap-6 w-full max-md:flex-col">
        <Controller
          name="taxpayerRegistration"
          control={control}
          render={({ field }) => (
            <MaskedInput
              error={errors.taxpayerRegistration?.message}
              placeholder="000.000.000-00"
              className="w-60 max-md:w-full"
              format="###.###.###-##"
              labelField="CPF"
              {...field}
            />
          )}
        />
        <Input
          placeholder="Nome completo"
          labelField="Nome completo"
          id="name"
          {...register('name')}
        />
      </div>
      <div className="flex gap-6 w-full max-md:flex-col">
        <Select
          className="w-1/2 max-md:w-full"
          defaultValue=""
          placeholder="Selecione o sexo"
          labelField="Gênero"
          id="gender"
          error={errors.gender?.message}
          optionsToSelection={GENDER}
          {...register('gender')}
        />
        <Select
          className="w-1/2 max-md:w-full"
          defaultValue=""
          placeholder="Selecione o estado civil"
          labelField="Estado civil"
          id="maritalStatus"
          optionsToSelection={MARITAL_STATUS}
          {...register('maritalStatus')}
        />
        <Controller
          name="birthDate"
          control={control}
          render={({ field }) => (
            <MaskedInput
              placeholder="00/00/0000"
              className="w-48 max-md:w-full"
              format="##/##/####"
              labelField="Data de nascimento"
              {...field}
            />
          )}
        />
      </div>
    </div>
  )
}

'use client'
import { useFormContext, Controller } from 'react-hook-form'

import { Input, Select, MaskedInput } from '@/components'
import { GENDER, MARITAL_STATUS } from '@/modules/Registrations/constants'
import { SubscriptionFormType } from '@/modules/Registrations/content'

export const PersonDataFields = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<SubscriptionFormType>()
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
              className="w-40 max-md:w-full"
              format="###.###.###-##"
              labelField="CPF"
              id="taxpayerRegistration"
              {...field}
            />
          )}
        />
        <Input
          className="w-full"
          placeholder="Nome completo"
          labelField="Nome completo"
          id="name"
          error={errors.name?.message}
          {...register('name')}
        />
      </div>
      <div className="flex gap-6 w-full max-md:flex-col">
        <Select
          className="w-full max-md:w-full"
          defaultValue=""
          placeholder="Selecione o sexo"
          labelField="Gênero"
          id="gender"
          error={errors.gender?.message}
          optionsToSelection={GENDER}
          {...register('gender')}
        />
        <Select
          className="w-full max-md:w-full"
          defaultValue=""
          placeholder="Selecione o estado civil"
          labelField="Estado civil"
          id="maritalStatus"
          error={errors.maritalStatus?.message}
          optionsToSelection={MARITAL_STATUS}
          {...register('maritalStatus')}
        />
        <Controller
          name="dateOfBirth"
          control={control}
          render={({ field }) => (
            <MaskedInput
              placeholder="00/00/0000"
              className="w-40 max-md:w-full"
              format="##/##/####"
              error={errors.dateOfBirth?.message}
              labelField="Data de nascimento"
              id="dateOfBirth"
              {...field}
            />
          )}
        />
      </div>
      <div className="flex gap-6 w-full max-md:flex-col">
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <MaskedInput
              placeholder="(00) 00000-0000"
              className="w-48 max-md:w-full"
              format="(##) #####-####"
              error={errors.phone?.message}
              labelField="Celular"
              id="phone"
              {...field}
            />
          )}
        />
        <Input
          className="w-full"
          placeholder="Email"
          labelField="Email"
          id="email"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>
    </div>
  )
}

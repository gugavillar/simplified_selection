'use client'
import { useFormContext, Controller } from 'react-hook-form'

import { Input, Select, MaskedInput } from '@/components/Forms'

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
  const { register, control } = useFormContext()
  return (
    <div className="space-y-4">
      <div className="flex gap-6 w-full max-md:flex-col">
        <Controller
          name="taxpayerRegistration"
          control={control}
          render={({ field }) => (
            <MaskedInput
              placeholder="000.000.000-00"
              className="w-60"
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
          placeholder="Selecione o sexo"
          labelField="Gênero"
          id="gender"
          optionsToSelection={GENDER}
          {...register('gender')}
        />
        <Select
          placeholder="Selecione o estado civil"
          labelField="Estado civil"
          id="maritalStatus"
          optionsToSelection={MARITAL_STATUS}
          {...register('maritalStatus')}
        />
      </div>
    </div>
  )
}

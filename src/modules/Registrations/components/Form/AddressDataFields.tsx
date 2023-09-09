'use client'
import { useFormContext, Controller } from 'react-hook-form'

import { Input, MaskedInput } from '@/components/Forms'

import { SubscriptionFormType } from './ContainerForm'

export const AddressDataFields = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<SubscriptionFormType>()
  return (
    <div className="space-y-4 mt-4">
      <div className="flex gap-6 w-full max-md:flex-col">
        <Controller
          name="zipCode"
          control={control}
          render={({ field }) => (
            <MaskedInput
              error={errors.zipCode?.message}
              placeholder="00000-000"
              className="w-32 max-md:w-full"
              format="#####-###"
              labelField="CEP"
              id="zipCode"
              {...field}
            />
          )}
        />
        <Input
          className="w-full"
          placeholder="Endereço"
          labelField="Endereço"
          id="address"
          error={errors.address?.message}
          {...register('address')}
        />
        <Input
          className="w-24"
          placeholder="N˚"
          labelField="N˚"
          id="number"
          {...register('number')}
        />
      </div>
      <div className="flex gap-6 w-full max-md:flex-col">
        <Input
          className="w-full"
          placeholder="Complemento"
          labelField="Complemento (opcional)"
          id="addOnAddress"
          {...register('addOnAddress')}
        />
        <Input
          className="w-full"
          placeholder="Bairro"
          labelField="Bairro"
          id="neighborhood"
          {...register('neighborhood')}
        />
      </div>
    </div>
  )
}

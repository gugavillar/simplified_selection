import { ChangeEvent, useState } from 'react'

import { useFormContext, Controller } from 'react-hook-form'
import { validateCep } from 'validations-br'

import { Input, MaskedInput, Select } from '@/components'
import { SubscriptionFormType } from '@/modules/Registrations/content'
import { getAddressFromZipCode, getCitiesFromUf } from '@/services'
import { SelectionOptionsType } from '@/types/common'

type AddressDataFieldsProps = {
  states: SelectionOptionsType | { message: string }
}

export const AddressDataFields = ({ states }: AddressDataFieldsProps) => {
  const [cities, setCities] = useState<SelectionOptionsType>([])
  const [isLoadingCities, setIsLoadingCities] = useState(false)
  const [isGettingAddress, setIsGettingAddress] = useState(false)

  const {
    register,
    control,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext<SubscriptionFormType>()

  const handleGetCities = async (value: string) => {
    if (!value) return
    setIsLoadingCities(true)
    try {
      const response = await getCitiesFromUf(value)
      const formattedResponse = response.map((city) => ({
        label: city.nome,
        value: city.nome,
      }))
      setCities(formattedResponse)
      clearErrors('city')
    } catch {
      setError('city', {
        message:
          'Não foi possível carregar as cidades, selecione o estado novamente',
      })
    } finally {
      setIsLoadingCities(false)
    }
  }

  const handleGetAddress = async ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (!validateCep(value)) return
    const valueToAPI = value.replace(/\D/g, '')
    try {
      setIsGettingAddress(true)
      const response = await getAddressFromZipCode(valueToAPI)

      if (response.erro) {
        setError('address', {
          message: 'CEP não localizado, informe os dados manualmente.',
        })
        return reset(
          (values) => ({
            ...values,
            address: '',
            addOnAddress: '',
            neighborhood: '',
            state: '',
            city: '',
          }),
          { keepDefaultValues: true, keepErrors: true },
        )
      }

      await handleGetCities(response.uf)

      setTimeout(
        () =>
          reset(
            (values) => ({
              ...values,
              address: response.logradouro,
              addOnAddress: response.complemento,
              neighborhood: response.bairro,
              state: response.uf,
              city: response.localidade,
            }),
            { keepDefaultValues: true },
          ),
        300,
      )
    } catch {
      setError('address', {
        message:
          'Não foi possível pegar as informações do endereço, preencha o CEP novamente.',
      })
    } finally {
      setIsGettingAddress(false)
    }
  }

  return (
    <div className="space-y-4 mt-4">
      <div className="flex gap-6 w-full max-md:flex-col">
        <Controller
          name="zipCode"
          control={control}
          render={({ field: { onBlur, ...rest } }) => (
            <MaskedInput
              error={errors.zipCode?.message}
              placeholder="00000-000"
              className="w-32 max-md:w-full"
              format="#####-###"
              labelField="CEP"
              id="zipCode"
              onBlur={handleGetAddress}
              {...rest}
            />
          )}
        />
        <Input
          className="w-full"
          placeholder={isGettingAddress ? 'Carregando...' : 'Endereço'}
          labelField="Endereço"
          id="address"
          disabled={isGettingAddress}
          error={errors.address?.message}
          {...register('address')}
        />
        <Input
          className="w-28"
          placeholder="N˚"
          labelField="N˚"
          id="addressNumber"
          disabled={isGettingAddress}
          error={errors.addressNumber?.message}
          {...register('addressNumber')}
        />
      </div>
      <div className="flex gap-6 w-full max-md:flex-col">
        <Input
          className="w-full"
          placeholder={isGettingAddress ? 'Carregando...' : 'Complemento'}
          labelField="Complemento (opcional)"
          id="addOnAddress"
          disabled={isGettingAddress}
          error={errors.addOnAddress?.message}
          {...register('addOnAddress')}
        />
        <Input
          className="w-full"
          labelField="Bairro"
          placeholder={isGettingAddress ? 'Carregando...' : 'Bairro'}
          id="neighborhood"
          disabled={isGettingAddress}
          error={errors.neighborhood?.message}
          {...register('neighborhood')}
        />
      </div>
      <div className="flex gap-6 w-full max-md:flex-col">
        <Select
          className="w-full max-md:w-full"
          defaultValue=""
          placeholder={
            isGettingAddress ? 'Carregando...' : 'Selecione o Estado'
          }
          labelField="UF"
          id="state"
          disabled={isGettingAddress}
          error={errors.state?.message}
          optionsToSelection={states as []}
          {...register('state')}
          onChange={(event) => handleGetCities(event.target.value)}
        />
        <Select
          className="w-full max-md:w-full"
          defaultValue=""
          placeholder={
            isLoadingCities || isGettingAddress
              ? 'Carregando...'
              : 'Selecione a cidade'
          }
          labelField="Cidade"
          id="city"
          disabled={isLoadingCities || isGettingAddress}
          error={errors.city?.message}
          optionsToSelection={cities}
          {...register('city')}
        />
      </div>
    </div>
  )
}

import { useFormContext, Controller } from 'react-hook-form'

import { Input, Select, MaskedInput } from '@/components'
import {
  COLOR_RACE,
  GENDER,
  MARITAL_STATUS,
  YES_OR_NO,
} from '@/modules/Registrations/constants'
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
          placeholder="Selecione a cor/raça"
          labelField="Cor/Raça"
          id="race"
          error={errors.race?.message}
          optionsToSelection={COLOR_RACE}
          {...register('race')}
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
          type="email"
          id="email"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>
      <div className="flex gap-6 w-full max-md:flex-col">
        <Input
          className="w-full"
          placeholder="Nome da mãe"
          labelField="Nome da mãe"
          id="mother"
          error={errors.mother?.message}
          {...register('mother')}
        />
        <Controller
          name="rg"
          control={control}
          render={({ field }) => (
            <MaskedInput
              placeholder="000000000"
              className="w-40 max-md:w-full"
              format="#########"
              error={errors.rg?.message}
              labelField="Número do RG"
              id="rg"
              {...field}
            />
          )}
        />
        <Controller
          name="expeditionDate"
          control={control}
          render={({ field }) => (
            <MaskedInput
              placeholder="00/00/0000"
              className="w-40 max-md:w-full"
              format="##/##/####"
              error={errors.expeditionDate?.message}
              labelField="Data de expedição"
              id="expeditionDate"
              {...field}
            />
          )}
        />
      </div>
      <div className="flex gap-6 w-full max-md:flex-col">
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
        <Select
          className="w-full max-md:w-full"
          defaultValue=""
          placeholder="Selecione a opção"
          labelField="Portador de deficiência"
          id="pcd"
          error={errors.pcd?.message}
          optionsToSelection={YES_OR_NO}
          {...register('pcd')}
        />
        <Controller
          name="nis"
          control={control}
          render={({ field }) => (
            <MaskedInput
              placeholder="00000000000"
              className="w-full max-md:w-full"
              format="###########"
              error={errors.nis?.message}
              labelField="NIS (opcional)"
              id="nis"
              {...field}
            />
          )}
        />
      </div>
    </div>
  )
}

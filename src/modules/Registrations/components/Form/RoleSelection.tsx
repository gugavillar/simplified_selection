'use client'
import { useFormContext } from 'react-hook-form'

import { RadioButton } from '@/components'

import { RoleSubscriptionType } from '../../content'

type RoleSelectionProps = {
  registerName: 'role'
  radioOptions: Array<{
    label: string
    value: string | number
    id: string
  }>
}

export const RoleSelection = ({
  radioOptions,
  registerName,
}: RoleSelectionProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<RoleSubscriptionType>()
  return (
    <div className="flex flex-wrap gap-6 w-full max-md:flex-col">
      {radioOptions?.map((option) => (
        <RadioButton
          error={errors?.role?.message}
          key={option.id}
          id={option.id}
          label={option.label}
          {...register(registerName)}
          value={option.value}
        />
      ))}
    </div>
  )
}

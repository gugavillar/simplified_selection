'use client'
import { useFormContext } from 'react-hook-form'

import { RadioButton } from '@/components'

type RoleSelectionProps = {
  registerName: string
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
  const { register } = useFormContext()
  return (
    <div className="flex flex-wrap gap-6 w-full max-md:flex-col">
      {radioOptions?.map((option) => (
        <RadioButton
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

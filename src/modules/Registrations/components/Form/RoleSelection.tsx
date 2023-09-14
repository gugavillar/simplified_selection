import { useFormContext } from 'react-hook-form'

import { RadioButton } from '@/components'

import { RoleSubscriptionType } from '@/modules/Registrations/content'

type RoleSelectionProps = {
  registerName: 'role'
  radioOptions: Array<{
    label: string
    subLabel?: string
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
    <div>
      <h3 className="text-gray-400 text-center mb-6">
        Selecione o cargo que deseja concorrer
      </h3>
      <div className="flex flex-wrap gap-6 w-full max-md:flex-col">
        {radioOptions?.map((option) => (
          <RadioButton
            error={errors?.role?.message}
            key={option.id}
            id={option.id}
            label={option.label}
            value={option.value}
            {...register(registerName)}
            {...(option.subLabel && { subLabel: option.subLabel })}
          />
        ))}
      </div>
    </div>
  )
}

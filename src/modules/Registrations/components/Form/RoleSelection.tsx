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
      <h3 className="mb-6 text-center text-gray-400">
        Selecione o cargo que deseja concorrer
      </h3>
      <div className="flex w-full flex-wrap gap-6 max-md:flex-col">
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

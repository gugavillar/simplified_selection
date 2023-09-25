import { DefaultSelectionOptionsType } from '@/types/common'

import { AddressDataFields, PersonDataFields } from '.'

type SubscriptionsFieldsProps = {
  states: Array<DefaultSelectionOptionsType> | { message: string }
}

export const SubscriptionsFields = ({ states }: SubscriptionsFieldsProps) => {
  return (
    <div>
      <h3 className="mb-6 text-center text-gray-400">
        Informe os dados solicitados abaixo
      </h3>
      <PersonDataFields />
      <AddressDataFields states={states} />
    </div>
  )
}

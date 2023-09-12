'use client'
import { SelectionOptionsType } from '@/types/common'

import { AddressDataFields, PersonDataFields } from '.'

type SubscriptionsFieldsProps = {
  states: SelectionOptionsType | { message: string }
}

export const SubscriptionsFields = ({ states }: SubscriptionsFieldsProps) => {
  return (
    <div>
      <h3 className="text-gray-400 text-center mb-6">
        Informe os dados pessoais e de endereço
      </h3>
      <PersonDataFields />
      <AddressDataFields states={states} />
    </div>
  )
}

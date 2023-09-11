'use client'
import { FormContainer } from '@/components/Forms/FormContainer'
import {
  AddressDataFields,
  PersonDataFields,
  RoleSelection,
} from '@/modules/Registrations/components'
import { ROLE_OPTIONS } from '@/modules/Registrations/constants'
import { subscriptionFormResolver } from '@/modules/Registrations/validations'
import { SelectionOptionsType } from '@/types/common'

const defaultValues = {
  taxpayerRegistration: '',
  name: '',
  gender: '',
  maritalStatus: '',
  dateOfBirth: '',
  phone: '',
  email: '',
  zipCode: '',
  address: '',
  addressNumber: '',
  addOnAddress: '',
  neighborhood: '',
  state: '',
  city: '',
}

type ContentPageProps = {
  states: SelectionOptionsType | { message: string }
}

export declare type SubscriptionFormType = typeof defaultValues

export const PageContent = ({ states }: ContentPageProps) => {
  const onSubmitHandler = (values: any) => {
    console.log(values)
  }

  return (
    <FormContainer
      handleSubmit={onSubmitHandler}
      defaultValues={defaultValues}
      resolver={subscriptionFormResolver}
    >
      <RoleSelection radioOptions={ROLE_OPTIONS} registerName="role" />
      <PersonDataFields />
      <AddressDataFields states={states} />
    </FormContainer>
  )
}

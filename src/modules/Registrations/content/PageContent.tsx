'use client'
import { useMemo, useState } from 'react'

import { Resolver } from 'react-hook-form'

import { Steps } from '@/components'
import { FormContainer } from '@/components/Forms/FormContainer'
import {
  SubscriptionsFields,
  RoleSelection,
  UploadDataField,
} from '@/modules/Registrations/components'
import { ROLE_OPTIONS } from '@/modules/Registrations/constants'
import {
  roleSubscriptionResolver,
  subscriptionFormResolver,
  uploadSubscriptionResolver,
} from '@/modules/Registrations/validations'
import { SelectionOptionsType } from '@/types/common'

const formSubscription = {
  taxpayerRegistration: '',
  name: '',
  gender: '',
  race: '',
  dateOfBirth: '',
  phone: '',
  email: '',
  mother: '',
  rg: '',
  expeditionDate: '',
  pcd: '',
  nis: '',
  maritalStatus: '',
  zipCode: '',
  address: '',
  addressNumber: '',
  addOnAddress: '',
  neighborhood: '',
  state: '',
  city: '',
}

const roleSubscription = {
  role: '',
}

const uploadSubscriptionDocuments: {
  upload: Array<File>
  documents: Array<File>
} = {
  upload: [],
  documents: [],
}

type ContentPageProps = {
  states: SelectionOptionsType | { message: string }
}

export declare type SubscriptionFormType = typeof formSubscription
export declare type RoleSubscriptionType = typeof roleSubscription
export declare type UploadSubscriptionDocumentsType =
  typeof uploadSubscriptionDocuments

type ResolverType = Resolver<
  RoleSubscriptionType | SubscriptionFormType | UploadSubscriptionDocumentsType
>

export const PageContent = ({ states }: ContentPageProps) => {
  const [userStep, setUserStep] = useState(1)

  const onSubmitHandler = (values: any) => {
    console.log(values)
  }

  const nextStep = () => setUserStep((step) => step + 1)

  const previousStep = () => setUserStep((step) => step - 1)

  const steps = useMemo(
    () => [
      {
        labelStep: 'Cargo desejado',
        children: (
          <RoleSelection radioOptions={ROLE_OPTIONS} registerName="role" />
        ),
      },
      {
        labelStep: 'Dados pessoais',
        children: <SubscriptionsFields states={states} />,
      },
      {
        labelStep: 'Documentos comprobatórios',
        children: <UploadDataField />,
      },
    ],
    [states],
  )

  const resolver = useMemo(() => {
    if (userStep === 1) {
      return {
        resolver: roleSubscriptionResolver,
        defaultValues: roleSubscription,
      }
    }
    if (userStep === 2) {
      return {
        resolver: subscriptionFormResolver,
        defaultValues: formSubscription,
      }
    }
    return {
      resolver: uploadSubscriptionResolver,
      defaultValues: uploadSubscriptionDocuments,
    }
  }, [userStep])

  return (
    <FormContainer
      mode="onChange"
      handleSubmit={onSubmitHandler}
      defaultValues={resolver?.defaultValues}
      resolver={resolver?.resolver as ResolverType}
      stepForm={{
        isClearButton: false,
        isFirstStep: userStep === 1,
        isLastStep: steps?.length === userStep,
        handleNextStep: nextStep,
        handlePreviousStep: previousStep,
      }}
    >
      <Steps steps={steps} userStep={userStep} />
    </FormContainer>
  )
}

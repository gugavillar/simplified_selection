'use client'
import { useMemo, useState } from 'react'

import { Resolver } from 'react-hook-form'

import { Steps } from '@/components'
import { FormContainer } from '@/components/Forms/FormContainer'
import { uploadFiles, insertCandidates, updateCandidate } from '@/services'

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
import { DefaultSelectionOptionsType } from '@/types/common'

const formSubscription = {
  taxpayerRegistration: '',
  name: '',
  gender: '',
  race: '',
  dateOfBirth: '',
  phone: '',
  email: '',
  mother: '',
  identificationDocument: '',
  dateOfExpedition: '',
  pcd: '',
  socialNumber: '',
  maritalStatus: '',
  address: {
    zipCode: '',
    location: '',
    number: '',
    addOn: '',
    neighborhood: '',
    state: '',
    city: '',
  },
}

const roleSubscription = {
  role: '',
}

const uploadSubscriptionDocuments: {
  documents: Array<File>
} = {
  documents: [],
}

type ContentPageProps = {
  states: Array<DefaultSelectionOptionsType> | { message: string }
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

  const onSubmitHandler = async (
    values:
      | RoleSubscriptionType
      | SubscriptionFormType
      | UploadSubscriptionDocumentsType,
  ) => {
    const { documents, ...rest } = values as RoleSubscriptionType &
      SubscriptionFormType &
      UploadSubscriptionDocumentsType

    try {
      const responseInsert = await insertCandidates(
        rest as RoleSubscriptionType & SubscriptionFormType,
      )

      const responseUpload = await uploadFiles(documents)

      await updateCandidate(responseInsert.data.id, {
        uploads: responseUpload.map((url) => url),
      })
    } catch (error) {
      console.log(error)
    }
  }

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

  const isFirstStep = userStep === 1
  const isLastStep = steps?.length === userStep

  const nextStep = () => setUserStep((step) => step + 1)

  const previousStep = () => setUserStep((step) => step - 1)

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
        isFirstStep,
        isLastStep,
        handleNextStep: nextStep,
        handlePreviousStep: previousStep,
      }}
    >
      <Steps steps={steps} userStep={userStep} />
    </FormContainer>
  )
}

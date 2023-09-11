import { Fragment } from 'react'

import { Controller, useFormContext } from 'react-hook-form'

import { DropzoneInputField } from '@/components'

import { UploadSubscriptionDocumentsType } from '../../content'

export const UploadDataField = () => {
  const {
    control,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext<UploadSubscriptionDocumentsType>()

  const handleClearValue = (name: keyof UploadSubscriptionDocumentsType) =>
    setValue(name, [], { shouldValidate: true })

  const handleSetError = (name: keyof UploadSubscriptionDocumentsType) =>
    setError(name, {
      message: 'Formato de arquivo não permitido',
    })

  const handleSetValue = (
    files: Array<File>,
    name: keyof UploadSubscriptionDocumentsType,
  ) => {
    setValue(name, files, { shouldValidate: true })
    clearErrors(name)
  }

  return (
    <Fragment>
      <Controller
        name="upload"
        control={control}
        render={({ field: { onChange } }) => (
          <DropzoneInputField
            fieldName="upload"
            label="Comprovante de escolaridade"
            options={{
              accept: {
                'image/jpg': [],
                'image/png': [],
                // 'application/pdf': [],
              },
            }}
            handleClearValue={handleClearValue}
            handleSetError={handleSetError}
            handleSetValue={handleSetValue}
            onChange={onChange}
            error={errors?.upload?.message}
          />
        )}
      />

      <Controller
        name="documents"
        control={control}
        render={({ field: { onChange } }) => (
          <DropzoneInputField
            fieldName="documents"
            label="Documentos"
            options={{
              accept: {
                'image/jpg': [],
                'image/png': [],
                'application/pdf': [],
              },
            }}
            handleClearValue={handleClearValue}
            handleSetError={handleSetError}
            handleSetValue={handleSetValue}
            onChange={onChange}
            error={errors?.upload?.message}
          />
        )}
      />
    </Fragment>
  )
}

'use client'
import { useCallback } from 'react'

import {
  useDropzone,
  DropzoneInputProps,
  DropzoneOptions,
  FileRejection,
} from 'react-dropzone'
import { useFormContext } from 'react-hook-form'

import { DropzoneInputContent } from './DropzoneInputContent'

const FILE_TYPE: {
  [key: string]: string
} = {
  'image/jpg': 'JPG',
  'image/png': 'PNG',
  'application/pdf': 'PDF',
}

const ERROR_CODE: {
  [key: string]: string
} = {
  'file-too-large':
    'Tamanho de arquivo excedido. O arquivo deve ter 2MB ou menos.',
  'file-invalid-type': 'Tipo de arquivo não suportado. Tente novamente.',
}

type DropzoneInputFieldProps = DropzoneInputProps & {
  name: string
  options?: Omit<DropzoneOptions, 'onDrop' | 'maxSize'>
  label: string
  error?: string
}

export const DropzoneInputField = ({
  label,
  id,
  name,
  options,
}: DropzoneInputFieldProps) => {
  const {
    setValue,
    setError,
    watch,
    clearErrors,
    formState: { errors },
  } = useFormContext()

  const onDrop = useCallback(
    (acceptedFiles: Array<File>, rejectedFiles: Array<FileRejection>) => {
      if (rejectedFiles?.length) {
        return rejectedFiles?.forEach(
          ({ errors }) =>
            errors?.forEach(({ code }) =>
              setError(name, {
                message: ERROR_CODE[code],
              }),
            ),
        )
      }
      setValue(name, acceptedFiles, { shouldValidate: true })
      clearErrors(name)
    },
    [clearErrors, name, setError, setValue],
  )

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxSize: 2048 * 1000,
    ...options,
  })

  const fileTypePermitted = !options?.accept
    ? 'nenhum'
    : Object.keys(options?.accept)
        ?.map((key) => FILE_TYPE[key])
        .join(', ')

  const hasFiles = watch(name)

  return (
    <div>
      <label className="block text-sm font-medium text-gray-500">{label}</label>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor={id}
          className={`group flex flex-col items-center justify-center w-full h-40 border-2 border-matisse-600 border-dashed rounded-lg cursor-pointer ${
            !hasFiles?.length ? 'hover:bg-matisse-600' : ''
          } `}
          {...getRootProps()}
        >
          <DropzoneInputContent
            fileSize="2MB"
            fileTypePermitted={fileTypePermitted}
            hasFiles={hasFiles?.length}
          />
          <input id={id} type="file" className="hidden" {...getInputProps()} />
        </label>
      </div>
      {errors?.[name]?.message && (
        <p className="text-xs text-red-500 mt-2">
          {errors?.[name]?.message as string}
        </p>
      )}
    </div>
  )
}

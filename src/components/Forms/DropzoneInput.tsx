'use client'
import { useCallback } from 'react'

import {
  DropzoneOptions,
  DropzoneInputProps,
  useDropzone,
  FileRejection,
} from 'react-dropzone'

import { Check, Upload } from '@/Icons'

const FILE_TYPE: {
  [key: string]: string
} = {
  'image/jpg': 'JPG',
  'image/png': 'PNG',
  'application/pdf': 'PDF',
}

type DropzoneInputFieldProps<T> = DropzoneInputProps & {
  label: string
  options?: DropzoneOptions
  error?: string
  handleClearValue: (name: T) => void
  handleSetError: (name: T) => void
  handleSetValue: (files: Array<File>, name: T) => void
  fieldName: T
}

export const DropzoneInputField = <T,>({
  handleClearValue,
  handleSetError,
  handleSetValue,
  options,
  error,
  id,
  label,
  fieldName,
  onChange,
}: DropzoneInputFieldProps<T>) => {
  const onDrop = useCallback(
    (acceptedFiles: Array<File>, rejectionFiles: Array<FileRejection>) => {
      if (rejectionFiles?.length) {
        return rejectionFiles.forEach(({ errors }) =>
          errors.forEach((erro) => {
            if (erro.code === 'file-invalid-type') {
              handleClearValue(fieldName)
              return handleSetError(fieldName)
            }
          }),
        )
      }
      handleSetValue(acceptedFiles, fieldName)
    },
    [handleClearValue, handleSetError, handleSetValue, fieldName],
  )

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    ...options,
  })

  const fileTypePermitted = !options?.accept
    ? 'nenhum'
    : Object.keys(options?.accept)
        ?.map((key) => FILE_TYPE[key])
        .join(', ')

  return (
    <div>
      <label className="block text-sm font-medium text-gray-500">{label}</label>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor={id}
          className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-400 group"
          {...getRootProps()}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {acceptedFiles?.length ? (
              <Check className="text-matisse-600 mb-4" width="32" height="32" />
            ) : (
              <Upload />
            )}
            <p className="mb-2 text-sm text-gray-500 group-hover:text-white">
              <span className="font-semibold">
                Clique para fazer o upload ou arraste e solte
              </span>
            </p>
            <p className="text-xs text-gray-500 group-hover:text-white">
              {fileTypePermitted}
            </p>
          </div>
          <input
            id={id}
            type="file"
            className="hidden"
            {...getInputProps({ onChange })}
          />
        </label>
      </div>
      {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
    </div>
  )
}

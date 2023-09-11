import { useCallback } from 'react'

import {
  DropzoneOptions,
  DropzoneInputProps,
  useDropzone,
  FileRejection,
} from 'react-dropzone'

import { Check, Upload } from '@/Icons'

type DropzoneInputFieldProps = DropzoneInputProps & {
  label: string
  options?: DropzoneOptions
  error?: string
  handleClearValue: () => void
  handleSetError: () => void
  handleSetValue: (files: Array<File>) => void
}

export const DropzoneInputField = ({
  handleClearValue,
  handleSetError,
  handleSetValue,
  options,
  error,
  id,
  label,
  onChange,
}: DropzoneInputFieldProps) => {
  const onDrop = useCallback(
    (acceptedFiles: Array<File>, rejectionFiles: Array<FileRejection>) => {
      if (rejectionFiles?.length) {
        return rejectionFiles.forEach(({ errors }) =>
          errors.forEach((erro) => {
            if (erro.code === 'file-invalid-type') {
              handleClearValue()
              return handleSetError()
            }
          }),
        )
      }
      handleSetValue(acceptedFiles)
    },
    [handleClearValue, handleSetError, handleSetValue],
  )
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    ...options,
  })

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
              PDF, PNG, JPG
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

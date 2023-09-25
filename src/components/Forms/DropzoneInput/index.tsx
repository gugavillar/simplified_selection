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
import { DropzoneListFiles } from './DropzoneListFiles'

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

const MAX_FILES = 5

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

  const selectedFiles: Array<File> = watch(name)

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

      if (!selectedFiles?.length) {
        setValue(name, acceptedFiles, {
          shouldValidate: true,
        })
        return clearErrors(name)
      }

      const files = acceptedFiles.filter((file) =>
        selectedFiles.map(
          (selected) =>
            selected.name !== file.name ||
            selected.lastModified !== file.lastModified,
        ),
      )

      setValue(name, [...selectedFiles, ...files], {
        shouldValidate: true,
      })
      return clearErrors(name)
    },
    [clearErrors, name, selectedFiles, setError, setValue],
  )

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: MAX_FILES,
    maxSize: 2048 * 1000,
    ...options,
  })

  const fileTypePermitted = !options?.accept
    ? 'nenhum'
    : Object.keys(options?.accept)
        ?.map((key) => FILE_TYPE[key])
        .join(', ')

  const handleRemoveFile = (file: File) => {
    const files = selectedFiles.filter(
      (selectedFile: File) =>
        file.lastModified !== selectedFile.lastModified ||
        file.name !== selectedFile.name,
    )
    setValue(name, files, { shouldValidate: true })
  }

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-500">
        {label}
      </label>
      <div className="flex w-full items-center justify-center">
        <label
          htmlFor={id}
          className={`group flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-matisse-600 ${
            selectedFiles?.length !== MAX_FILES ? 'hover:bg-matisse-600' : ''
          } `}
          {...getRootProps()}
        >
          <DropzoneInputContent
            fileSize="2MB"
            fileTypePermitted={fileTypePermitted}
            hasFiles={selectedFiles?.length === MAX_FILES}
          />
          <input id={id} type="file" className="hidden" {...getInputProps()} />
        </label>
      </div>
      {errors?.[name]?.message && (
        <p className="mt-2 text-xs text-red-500">
          {errors?.[name]?.message as string}
        </p>
      )}
      {selectedFiles?.length ? (
        <DropzoneListFiles
          selectedFiles={selectedFiles}
          handleRemoveFile={handleRemoveFile}
        />
      ) : null}
    </div>
  )
}

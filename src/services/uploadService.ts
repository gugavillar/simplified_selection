import { UploadCloudinaryResponse } from '@/types/uploads'

import { cloudinaryAPI } from './api'

export const uploadFiles = async (
  files: Array<File>,
): Promise<Array<UploadCloudinaryResponse>> => {
  if (!files?.length) {
    throw Error('Necessário que tenha arquivos para realizar o upload')
  }

  const allFilesToUpload = files.map((file) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append(
      'upload_preset',
      process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER as string,
    )
    return formData
  })

  const response = await Promise.all(
    allFilesToUpload.map(
      async (form) =>
        await cloudinaryAPI.post('/upload', form, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        }),
    ),
  )

  return response.map((res) => res.data)

  /* return await Promise.all(
    files.map((file) => {
      const formData = new FormData()
      formData.append('file', file)
      formData.append(
        'upload_preset',
        process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER as string,
      )

      return cloudinaryAPI.post('/upload', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
    }),
  ) */
}

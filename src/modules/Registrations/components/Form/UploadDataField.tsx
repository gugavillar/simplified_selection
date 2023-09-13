import { DropzoneInputField } from '@/components'

export const UploadDataField = () => {
  return (
    <div>
      <h3 className="text-gray-400 text-center mb-6">
        Envie os documentos comprobatórios
      </h3>
      <DropzoneInputField
        label="Documentos comprobatórios"
        id="documents"
        name="documents"
        options={{
          accept: {
            'application/pdf': [],
            'image/png': [],
          },
        }}
      />
    </div>
  )
}

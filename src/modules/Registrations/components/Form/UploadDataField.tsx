import { DropzoneInputField } from '@/components'

export const UploadDataField = () => {
  return (
    <div className="space-y-4">
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

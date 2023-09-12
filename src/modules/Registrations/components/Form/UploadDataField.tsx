import { DropzoneInputField } from '@/components'

export const UploadDataField = () => {
  return (
    <div className="space-y-4">
      <DropzoneInputField
        label="Documentos de escolaridade"
        id="upload"
        name="upload"
        options={{
          accept: {
            'image/png': [],
            'image/jpg': [],
            'application/pdf': [],
          },
        }}
      />
    </div>
  )
}

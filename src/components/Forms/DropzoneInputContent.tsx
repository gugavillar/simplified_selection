import { Check, Upload } from '@/Icons'

type DropzoneInputContentProps = {
  hasFiles: boolean
  fileTypePermitted: string
  fileSize: string
}

export const DropzoneInputContent = ({
  fileSize,
  fileTypePermitted,
  hasFiles,
}: DropzoneInputContentProps) => {
  return hasFiles ? (
    <div className="flex flex-col items-center justify-center pt-5 pb-6">
      <Check className="text-matisse-600 mb-4" width="32" height="32" />
      <p className="mb-2 text-sm text-matisse-600">
        <span className="font-semibold">Upload concluído com sucesso</span>
      </p>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center pt-5 pb-6">
      <Upload />
      <p className="mb-2 text-sm text-matisse-600 group-hover:text-white">
        <span className="font-semibold">
          Clique para fazer o upload ou arraste e solte
        </span>
      </p>
      <p className="text-xs text-matisse-600 group-hover:text-white">
        Permitido apenas {fileTypePermitted}
      </p>
      <p className="text-xs text-matisse-600 group-hover:text-white">
        Arquivo até {fileSize}
      </p>
    </div>
  )
}

import { Close } from '@/Icons'

type DropzoneListFilesProps = {
  selectedFiles: Array<File>
  handleRemoveFile: (file: File) => void
}

export const DropzoneListFiles = ({
  selectedFiles,
  handleRemoveFile,
}: DropzoneListFilesProps) => {
  return (
    <div className="mt-3 w-full">
      <h3>Lista de documentos</h3>
      <ul className="w-full text-sm font-medium">
        {selectedFiles?.map((file, index) => {
          const isLastFile = index === selectedFiles.length - 1
          return (
            <li
              key={file.lastModified}
              className={`flex items-center justify-between w-full px-4 py-2 text-matisse-600 ${
                !isLastFile ? 'border-b border-gray-300' : ''
              }`}
            >
              {file.name}
              <button
                type="button"
                className="px-3 py-2 text-xs font-medium text-center inline-flex items-center gap-2 text-white bg-matisse-600 rounded-lg hover:opacity-90"
                onClick={() => handleRemoveFile(file)}
              >
                Remover
                <Close />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

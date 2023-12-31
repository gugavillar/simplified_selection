import { IconPropsType } from '@/types/common'

type UploadProps = IconPropsType

export const Upload = ({ width = '32', height = '32' }: UploadProps) => {
  return (
    <svg
      className="mb-4 text-matisse-600 group-hover:text-white"
      fill="none"
      viewBox="0 0 20 16"
      width={width}
      height={height}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
      />
    </svg>
  )
}

import { IconPropsType } from '@/types/common'

type CheckProps = IconPropsType

export const Check = ({ width = '20', height = '20' }: CheckProps) => {
  return (
    <svg
      width={width}
      height={height}
      className="hidden text-matisse-600"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  )
}
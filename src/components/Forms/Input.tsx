import { forwardRef } from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  labelField: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ labelField, ...props }: InputProps, ref) => {
    return (
      <div className={`w-full ${props.className}`}>
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-500"
        >
          {labelField}
        </label>

        <input
          {...props}
          className="mt-1 w-full rounded-md border-gray-200 shadow-sm h-10"
          ref={ref}
        />
      </div>
    )
  },
)

Input.displayName = 'Input'

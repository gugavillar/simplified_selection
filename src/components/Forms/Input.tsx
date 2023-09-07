import { forwardRef } from 'react'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  ref: unknown
  labelField: string
}

export const Input = forwardRef(({ labelField, ref, ...props }: InputProps) => {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="block text-xs font-medium text-gray-700"
      >
        {labelField}
      </label>

      <input
        ref={ref}
        {...props}
        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
      />
    </div>
  )
})

Input.displayName = 'Input'

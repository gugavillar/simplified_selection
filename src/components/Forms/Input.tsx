import { forwardRef } from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  labelField: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ labelField, error, ...props }: InputProps, ref) => {
    const classes = props.className ?? ''
    const errorClasses = error
      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
      : ''
    return (
      <div className={`${classes}`}>
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-500"
        >
          {labelField}
        </label>

        <input
          {...props}
          className={`my-1 h-10 rounded-md border-gray-200 shadow-sm disabled:bg-gray-300 ${classes} ${errorClasses}`}
          ref={ref}
        />
        {error ? <p className="text-xs text-red-500">{error}</p> : null}
      </div>
    )
  },
)

Input.displayName = 'Input'

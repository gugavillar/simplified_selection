import { forwardRef } from 'react'

type SelectProps = React.InputHTMLAttributes<HTMLSelectElement> & {
  labelField: string
  optionsToSelection: Array<{
    label: string
    value: string | number
  }>
  error?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ labelField, optionsToSelection, error, ...props }: SelectProps, ref) => {
    return (
      <div className={`w-full ${props.className}`}>
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-500"
        >
          {labelField}
        </label>

        <select
          {...props}
          className={`my-1 w-full rounded-md border-gray-200 shadow-sm h-10 ${
            error && 'border-red-500 focus:ring-red-500 focus:border-red-500'
          }`}
          ref={ref}
        >
          <option value="" disabled>
            {props.placeholder}
          </option>
          {optionsToSelection?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error ? <p className="text-xs text-red-500">{error}</p> : null}
      </div>
    )
  },
)

Select.displayName = 'Select'

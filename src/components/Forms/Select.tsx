import { forwardRef } from 'react'

type SelectProps = React.InputHTMLAttributes<HTMLSelectElement> & {
  labelField: string
  optionsToSelection: Array<{
    label: string
    value: string | number
  }>
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ labelField, optionsToSelection, ...props }: SelectProps, ref) => {
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
          className="mt-1 w-full rounded-md border-gray-200 shadow-sm h-10"
          ref={ref}
        >
          <option value="" disabled selected>
            {props.placeholder}
          </option>
          {optionsToSelection?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  },
)

Select.displayName = 'Select'

import { forwardRef } from 'react'

type SelectProps<T> = React.InputHTMLAttributes<HTMLSelectElement> & {
  labelField: string
  optionsToSelection: T
  error?: string
}

const SelectComponent = <T,>(
  { labelField, optionsToSelection, error, ...props }: SelectProps<T>,
  ref: React.ForwardedRef<HTMLSelectElement>,
) => {
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

      <select
        {...props}
        className={`my-1 h-10 rounded-md border-gray-200 shadow-sm disabled:bg-gray-300 ${classes} ${errorClasses}`}
        ref={ref}
      >
        <option value="" disabled>
          {props.placeholder}
        </option>

        {Array.isArray(optionsToSelection)
          ? optionsToSelection?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))
          : null}
      </select>
      {error ? <p className="text-xs text-red-500">{error}</p> : null}
    </div>
  )
}

export const Select = forwardRef(SelectComponent)

Select.displayName = 'Select'

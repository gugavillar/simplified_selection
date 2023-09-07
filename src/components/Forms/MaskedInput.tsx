import { forwardRef } from 'react'

import { PatternFormat, PatternFormatProps } from 'react-number-format'

type MaskedInputProps = PatternFormatProps & {
  labelField: string
  error?: string
}

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ labelField, format, error, ...props }: MaskedInputProps, ref) => {
    return (
      <div className={`w-full ${props.className}`}>
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-500"
        >
          {labelField}
        </label>
        <PatternFormat
          {...props}
          className={`my-1 w-full rounded-md border-gray-200 shadow-sm h-10 ${
            error && 'border-red-500 focus:ring-red-500 focus:border-red-500'
          }`}
          format={format}
          getInputRef={ref}
        />
        {error ? <p className="text-xs text-red-500">{error}</p> : null}
      </div>
    )
  },
)

MaskedInput.displayName = 'MaskedInput'

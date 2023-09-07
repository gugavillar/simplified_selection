import { forwardRef } from 'react'

import { PatternFormat, PatternFormatProps } from 'react-number-format'

type MaskedInputProps = PatternFormatProps & {
  labelField: string
}

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ labelField, format, ...props }: MaskedInputProps, ref) => {
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
          className="mt-1 w-full rounded-md border-gray-200 shadow-sm h-10"
          format={format}
          getInputRef={ref}
        />
      </div>
    )
  },
)

MaskedInput.displayName = 'MaskedInput'

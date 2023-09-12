import { forwardRef } from 'react'

import { Check } from '@/Icons'

type RadioButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  subLabel?: string
  error?: string
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, error, subLabel, ...props }: RadioButtonProps, ref) => {
    const errorClasses = error
      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
      : ''

    return (
      <div className="min-w-[30%]">
        <input
          type="radio"
          {...props}
          className="peer hidden [&:checked_+_label_svg]:block"
          ref={ref}
        />

        <label
          htmlFor={props.id}
          className={`block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-300 peer-checked:border-matisse-600 peer-checked:ring-1 peer-checked:ring-matisse-600 ${errorClasses}`}
        >
          <div className="flex items-center justify-between">
            <p className="text-gray-800">{label}</p>
            <Check className="hidden text-matisse-600" />
          </div>
          {subLabel ? <p className="mt-1 text-gray-400">{subLabel}</p> : null}
        </label>

        {error ? <p className="text-xs text-red-500 mt-1">{error}</p> : null}
      </div>
    )
  },
)

RadioButton.displayName = 'RadioButton'

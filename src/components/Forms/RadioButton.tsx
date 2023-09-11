import { forwardRef } from 'react'

import { Check } from '@/Icons'

type RadioButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, error, ...props }: RadioButtonProps, ref) => {
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
          className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-300 peer-checked:border-matisse-600 peer-checked:ring-1 peer-checked:ring-matisse-600"
        >
          <div className="flex items-center justify-between">
            <p className="text-gray-800">{label}</p>
            <Check />
          </div>
        </label>
      </div>
    )
  },
)

RadioButton.displayName = 'RadioButton'

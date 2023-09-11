import { StepCheckIcon } from './StepCheckIcon'
import { StepNumber } from './StepNumber'

type StepItemProps = {
  labelStep: string
  stepNumber: number
  userStep: number
}

export const StepItem = ({
  labelStep,
  stepNumber,
  userStep,
}: StepItemProps) => {
  const isActiveStep = stepNumber === userStep
  const bgColor = isActiveStep ? 'bg-matisse-600 text-white' : 'bg-gray-100'
  const textColor = isActiveStep ? 'text-matisse-600' : ''
  return (
    <li className="flex items-center gap-2 p-2 bg-white">
      {userStep > stepNumber ? (
        <StepCheckIcon />
      ) : (
        <StepNumber bgColor={bgColor} stepNumber={stepNumber} />
      )}
      <span className={`hidden sm:block ${textColor}`}>{labelStep}</span>
    </li>
  )
}

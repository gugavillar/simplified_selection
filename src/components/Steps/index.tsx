import { PropsWithChildren } from 'react'

import { StepItem } from './StepItem'

type StepsProps = PropsWithChildren & {
  userStep: number
  steps: Array<{
    labelStep: string
    children: React.ReactNode
  }>
}

export const Steps = ({ steps, userStep }: StepsProps) => {
  if (!steps || steps?.length < 2) return null

  return (
    <div>
      <div className="relative mb-6 after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-200">
        <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
          {steps?.map((step, index) => (
            <StepItem
              key={step.labelStep}
              labelStep={step.labelStep}
              stepNumber={index + 1}
              userStep={userStep}
            />
          ))}
        </ol>
      </div>
      {steps?.[userStep - 1]?.children}
    </div>
  )
}

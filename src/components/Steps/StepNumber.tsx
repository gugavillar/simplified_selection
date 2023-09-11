type StepNumberProps = {
  stepNumber: number
  bgColor: string
}

export const StepNumber = ({ bgColor, stepNumber }: StepNumberProps) => {
  return (
    <span
      className={`h-6 w-6 rounded-full text-center text-[10px]/6 font-bold ${bgColor}`}
    >
      {stepNumber}
    </span>
  )
}

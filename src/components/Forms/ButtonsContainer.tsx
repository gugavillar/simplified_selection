import { FieldValues, UseFormTrigger } from 'react-hook-form'

import { Button } from './Button'
import { StepsForm } from './FormContainer'

type ButtonsContainerProps<T extends FieldValues> = {
  handleClearForm?: () => void
  stepsForm?: StepsForm & {
    trigger: UseFormTrigger<T>
    errors: boolean
  }
}

export const ButtonsContainer = <T extends FieldValues>({
  handleClearForm,
  stepsForm,
}: ButtonsContainerProps<T>) => {
  if (stepsForm) {
    return (
      <div className="flex gap-6 mt-4 justify-end">
        {stepsForm?.isClearButton ? (
          <Button onClick={handleClearForm} variant="border" type="button">
            Limpar
          </Button>
        ) : null}
        {!stepsForm?.isFirstStep ? (
          <Button onClick={stepsForm.handlePreviousStep} type="button">
            Voltar
          </Button>
        ) : null}
        <Button key="advancedStep" type="submit">
          {!stepsForm.isLastStep ? 'Avançar' : 'Cadastrar'}
        </Button>
      </div>
    )
  }

  return (
    <div className="flex gap-6 mt-4 justify-end">
      <Button onClick={handleClearForm} variant="border" type="button">
        Limpar
      </Button>
      <Button type="submit">Cadastrar</Button>
    </div>
  )
}

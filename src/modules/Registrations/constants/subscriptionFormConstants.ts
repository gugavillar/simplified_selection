export const GENDER = [
  { label: 'Masculino', value: 'Masculino' },
  { label: 'Feminino', value: 'Feminino' },
] as const

export const MARITAL_STATUS = [
  { label: 'Solteiro(a)', value: 'Solteiro(a)' },
  { label: 'Casado(a)', value: 'Casado(a)' },
  { label: 'Separado(a)', value: 'Separado(a)' },
  { label: 'Divorciado(a)', value: 'Divorciado(a)' },
  { label: 'Viúvo(a)', value: 'Viúvo(a)' },
] as const

export const COLOR_RACE = [
  { label: 'Branco', value: 'Branco' },
  { label: 'Preto', value: 'Preto' },
  { label: 'Pardo', value: 'Pardo' },
  { label: 'Indígena', value: 'Indígena' },
  { label: 'Amarelo', value: 'Amarelo' },
] as const

export const YES_OR_NO = [
  { label: 'Sim', value: 'Sim' },
  { label: 'Não', value: 'Não' },
] as const

export const ROLE_OPTIONS = [
  {
    label: 'Assistente administrativo',
    value: '1',
    id: 'field-administrative',
  },
  {
    label: 'Aux. serviços gerais',
    value: '2',
    id: 'field-general',
  },
  {
    label: 'Motorista',
    value: '3',
    id: 'field-driver',
  },
  {
    label: 'Recepcionista',
    value: '4',
    id: 'field-receptionists',
  },
  {
    label: 'Nutricionista',
    value: '5',
    id: 'field-nutricionists',
    subLabel: 'Secretaria de educação',
  },
  {
    label: 'Nutricionista',
    value: '6',
    id: 'field-healhNutricionist',
    subLabel: 'Secretaria de saúde e bem estar',
  },
]

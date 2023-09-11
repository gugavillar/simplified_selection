import { parse, format, isValid } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const regexDatePTBR = /\d{2}\/\d{2}\/\d{4}/

const getNumberDate = (date: string, formatString: string) => {
  return parse(date, formatString, new Date(), {
    locale: ptBR,
  }).getTime()
}

export const formatterDate = (date: string) => {
  if (!date?.match(regexDatePTBR)?.[0]) return

  const numberedDate = getNumberDate(date, 'dd/MM/yyyy')
  if (isNaN(numberedDate)) return

  return format(new Date(numberedDate), 'yyyy-MM-dd')
}

export const isValidDate = (date: string | undefined) => {
  if (!date) return false

  const numberedDate = getNumberDate(date, 'yyyy-MM-dd')
  if (isNaN(numberedDate)) return false

  return isValid(new Date(numberedDate))
}

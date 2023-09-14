import { parse, format, isValid, isPast } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const regexDatePTBR = /\d{2}\/\d{2}\/\d{4}/

const getNumberDate = (date: string, formatString: string) => {
  if (!date?.match(regexDatePTBR)?.[0]) return NaN

  return parse(date, formatString, new Date(), {
    locale: ptBR,
  }).getTime()
}

export const isFutureDateFromToday = (date: string) => {
  const numberedDate = getNumberDate(date, 'dd/MM/yyyy')
  if (isNaN(numberedDate)) return false

  return !isPast(new Date(numberedDate))
}

export const formatterDateToISODate = (date: string) => {
  const numberedDate = getNumberDate(date, 'dd/MM/yyyy')
  if (isNaN(numberedDate)) return

  return format(new Date(numberedDate), 'yyyy-MM-dd')
}

export const isValidBirthDate = (date: string | undefined) => {
  if (!date) return false

  const numberedDate = getNumberDate(date, 'dd/MM/yyyy')
  if (isNaN(numberedDate)) return false

  return isValid(new Date(numberedDate)) && isPast(new Date(numberedDate))
}

export const isValidExpeditionDocumentDate = (date: string | undefined) => {
  if (!date) return false

  const numberedDate = getNumberDate(date, 'dd/MM/yyyy')
  if (isNaN(numberedDate)) return false

  return isValid(new Date(numberedDate)) && isPast(new Date(numberedDate))
}

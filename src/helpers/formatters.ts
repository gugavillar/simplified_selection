const regexTaxpayerRegistrationBrazilianFormat = /(\d{3})(\d{3})(\d{3})(\d{2})/g
const regexZipCodeBrazilianFormat = /(\d{5})(\d{3})/g
const regexPhoneBrazilianFormat = /(\d{2})(\d{5})(\d{4})/g

export const sortSelectOptions = (
  valueA: { label: string },
  valueB: { label: string },
) => {
  const nameA = valueA.label.toUpperCase()
  const nameB = valueB.label.toUpperCase()

  if (nameA < nameB) return -1

  if (nameA > nameB) return 1

  return 0
}

export const orderArrayBasedOnList = (
  arrayToSort: Array<string>,
  sortList: Array<string>,
) => arrayToSort.sort((a, b) => sortList.indexOf(a) - sortList.indexOf(b))

export const formatTaxpayerRegistration = (value: string) =>
  value.replace(
    regexTaxpayerRegistrationBrazilianFormat,
    (_, $1, $2, $3, $4) => `${$1}.${$2}.${$3}-${$4}`,
  )

export const formatZipCode = (value: string) =>
  value.replace(regexZipCodeBrazilianFormat, (_, $1, $2) => `${$1}-${$2}`)

export const formatPhone = (value: string) =>
  value.replace(
    regexPhoneBrazilianFormat,
    (_, $1, $2, $3) => `(${$1}) ${$2}-${$3}`,
  )

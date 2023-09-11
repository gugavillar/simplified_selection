export const sortSelectOptions = (
  valueA: { label: string },
  valueB: { label: string },
) => {
  const nameA = valueA.label.toUpperCase()
  const nameB = valueB.label.toUpperCase()
  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }

  return 0
}

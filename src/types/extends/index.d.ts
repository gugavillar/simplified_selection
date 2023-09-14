type TYear = `${number}${number}${number}${number}`
type TMonth = `${number}${number}`
type TDay = `${number}${number}`
type THours = `${number}${number}`
type TMinutes = `${number}${number}`
type TSeconds = `${number}${number}`
type TMilliseconds = `${number}${number}`

/**
 * Represent a string like `2021-01-08`
 */
type TDateISODate = `${TYear}-${TMonth}-${TDay}`

/**
 * Represent a string like `14:42:34.678`
 */
type TDateISOTime = `${THours}:${TMinutes}:${TSeconds}.${TMilliseconds}`

/**
 * Represent a string like `2021-01-08T14:42:34.678Z` (format: ISO 8601).
 */
type TDateISO = `${TDateISODate}T${TDateISOTime}Z`

/**
 * Represent a string like `2021-01-08T14:42:34Z` (format: ISO 8601).
 */

type TDateISOWithoutMilliseconds =
  `${TDateISODate}T${THours}:${TMinutes}:${TSeconds}Z`

interface Date {
  toISOString(): TDateISO
}

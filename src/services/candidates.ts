import { QuerySuccess, fql } from 'fauna'

import {
  CandidateDatabaseType,
  CandidateFormDataType,
} from '@/types/candidates'

import { faunaClient } from './api'

export const insertCandidates = (
  candidate: CandidateFormDataType,
): Promise<QuerySuccess<CandidateDatabaseType>> => {
  const queryCreateCandidate = fql`
    candidates.create(${candidate})
  `
  return faunaClient.query(queryCreateCandidate)
}

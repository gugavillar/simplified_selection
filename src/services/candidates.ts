import { QuerySuccess, fql } from 'fauna'

import {
  CandidateDatabaseType,
  CandidateFormDataType,
} from '@/types/candidates'
import { UploadCloudinaryResponse } from '@/types/uploads'

import { faunaClient } from './api'

export const insertCandidates = (
  candidate: CandidateFormDataType,
): Promise<QuerySuccess<CandidateDatabaseType>> => {
  const queryCreateCandidate = fql`
    candidates.create(${candidate})
  `
  return faunaClient.query(queryCreateCandidate)
}

export const updateCandidate = (
  candidateId: string,
  data: { uploads: Array<UploadCloudinaryResponse> },
): Promise<QuerySuccess<Array<CandidateDatabaseType>>> => {
  const queryUpdateCandidate = fql`
  candidates.byId(${candidateId})?.update(${data})
  `
  return faunaClient.query(queryUpdateCandidate)
}

export const getCandidateById = (
  candidateId: string,
): Promise<QuerySuccess<CandidateDatabaseType>> => {
  const queryGetCandidateById = fql`
  candidates.byId(${candidateId})
  `
  return faunaClient.query(queryGetCandidateById)
}

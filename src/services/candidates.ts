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

export const getAllCandidates = (): Promise<
  QuerySuccess<{
    data: Array<
      Pick<
        CandidateDatabaseType,
        'id' | 'name' | 'taxpayerRegistration' | 'role'
      >
    >
    after: string | undefined
  }>
> => {
  const queryGetAllCandidates = fql`
  candidates.all().order(asc(.name)).map(candidate => ({id: candidate.id, name: candidate.name, taxpayerRegistration: candidate.taxpayerRegistration, role: candidate.role }))
  `
  return faunaClient.query(queryGetAllCandidates)
}

import { DetailsList } from '@/modules/Candidate/components/DetailsList'
import { orderOfListOfCandidateData } from '@/modules/Candidate/constants'
import { CandidateDatabaseType } from '@/types/candidates'

type PageContentProps = {
  candidate: Omit<CandidateDatabaseType, 'uploads' | 'id' | 'coll' | 'ts'>
}

export const PageContent = ({ candidate }: PageContentProps) => {
  return (
    <DetailsList
      candidate={candidate}
      orderOfListOfCandidateData={orderOfListOfCandidateData}
    />
  )
}

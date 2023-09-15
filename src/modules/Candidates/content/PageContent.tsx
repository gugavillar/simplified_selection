import { Table } from '@/components'

import { headersForTable } from '../constants'

export type CandidatesData = {
  id: string
  name: string
  taxpayerRegistration: string
  role: string
  action: React.ReactNode
}

type PageContentProps = {
  candidates: {
    data: Array<CandidatesData>
    after: string | undefined
  }
}

export const PageContent = ({ candidates }: PageContentProps) => {
  return (
    <Table
      bodyData={candidates.data as Array<CandidatesData>}
      headers={headersForTable}
    />
  )
}

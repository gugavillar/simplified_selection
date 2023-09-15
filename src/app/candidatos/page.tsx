import Link from 'next/link'

import { WrapperPage } from '@/components'
import { FileView } from '@/Icons'
import { getAllCandidates } from '@/services'

import { candidateObjectFormatFunction } from '@/helpers'
import { CandidatesData, PageContent } from '@/modules/Candidates/content'

type CandidatesReturn = {
  data: Array<CandidatesData>
  after: string | undefined
}

const getCandidates = async () => {
  try {
    const response = await getAllCandidates()
    const formattedData = response.data.data.map((candidate) => ({
      ...candidate,
      taxpayerRegistration: candidateObjectFormatFunction.taxpayerRegistration(
        candidate.taxpayerRegistration,
      ),
      action: (
        <Link href={`/candidatos/${candidate.id}`}>
          <FileView />
        </Link>
      ),
    }))
    return {
      ...response.data,
      data: formattedData,
    }
  } catch {
    return { message: 'Falha ao pegar a listagem dos candidatos' }
  }
}

export default async function ListOfCandidates() {
  const response = (await getCandidates()) as CandidatesReturn
  return (
    <WrapperPage title="Lista dos candidatos inscritos">
      <PageContent candidates={response} />
    </WrapperPage>
  )
}

import { WrapperPage } from '@/components'
import { getCandidateById } from '@/services'

import { PageContent } from '@/modules/Candidate/content'
import { CandidateDatabaseType } from '@/types/candidates'

const getCandidate = async (candidateId: string) => {
  try {
    const {
      data: { uploads, id, coll, ts, ...rest },
    } = await getCandidateById(candidateId)
    return rest
  } catch {
    return { message: 'Falha ao pegar os dados do candidato' }
  }
}

export default async function CandidateData({
  params,
}: {
  params: { candidateId: string }
}) {
  const response = (await getCandidate(
    params.candidateId,
  )) as CandidateDatabaseType
  return (
    <WrapperPage title="Dados do candidato">
      <PageContent candidate={response} />
    </WrapperPage>
  )
}

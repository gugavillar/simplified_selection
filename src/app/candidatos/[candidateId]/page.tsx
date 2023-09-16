import { WrapperPage } from '@/components'
import { getCandidateById } from '@/services'

import {
  formatPhone,
  formatTaxpayerRegistration,
  formatZipCode,
  formatterDateToBrazilianDate,
} from '@/helpers'
import { PageContent } from '@/modules/Candidate/content'
import { CandidateDatabaseType } from '@/types/candidates'

type GetCandidateReturnType = {
  candidateData: Omit<
    CandidateDatabaseType,
    'upload' | 'id' | 'coll' | 'ts' | 'address'
  >
  addressData: Pick<CandidateDatabaseType, 'address'>['address']
}

const getCandidate = async (candidateId: string) => {
  try {
    const {
      data: { uploads, id, coll, ts, address, ...rest },
    } = await getCandidateById(candidateId)

    const formattedCandidateData = {
      ...rest,
      taxpayerRegistration: formatTaxpayerRegistration(
        rest.taxpayerRegistration,
      ),
      dateOfExpedition: formatterDateToBrazilianDate(rest.dateOfExpedition),
      dateOfBirth: formatterDateToBrazilianDate(rest.dateOfBirth),
      phone: formatPhone(rest.phone),
    }

    const formattedAddressData = {
      ...address,
      zipCode: formatZipCode(address.zipCode),
    }

    return {
      candidateData: formattedCandidateData,
      addressData: formattedAddressData,
    }
  } catch {
    throw Error('Falha ao pegar os dados do candidato')
  }
}

export default async function CandidateData({
  params,
}: {
  params: { candidateId: string }
}) {
  const { addressData, candidateData } = (await getCandidate(
    params.candidateId,
  )) as GetCandidateReturnType
  return (
    <WrapperPage title="Dados do candidato">
      <PageContent candidate={candidateData} address={addressData} />
    </WrapperPage>
  )
}

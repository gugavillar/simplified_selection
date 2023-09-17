import { PersonDataDetailsList } from '@/modules/Candidate/components/PersonDataDetailsList'
import {
  orderOfListOfCandidateAddressData,
  orderOfListOfCandidatePersonData,
} from '@/modules/Candidate/constants'
import { CandidateDatabaseType } from '@/types/candidates'

import { AddressDataDetailsList } from '../components/AddressDataDetailsList'

type PageContentProps = {
  candidate: Omit<
    CandidateDatabaseType,
    'uploads' | 'id' | 'coll' | 'ts' | 'address'
  >
  address: Pick<CandidateDatabaseType, 'address'>['address']
}

export const PageContent = ({ candidate, address }: PageContentProps) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 ">
          Informações pessoais
        </h2>
        <PersonDataDetailsList
          candidate={candidate}
          orderOfListOfCandidateData={orderOfListOfCandidatePersonData}
        />
      </div>
      <div>
        <h2 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 ">
          Dados de endereço
        </h2>
        <AddressDataDetailsList
          address={address}
          orderOfListOfCandidateAddressData={orderOfListOfCandidateAddressData}
        />
      </div>
    </div>
  )
}

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
      <h3>Dados pessoais</h3>
      <PersonDataDetailsList
        candidate={candidate}
        orderOfListOfCandidateData={orderOfListOfCandidatePersonData}
      />
      <h3>Endereço</h3>
      <AddressDataDetailsList
        address={address}
        orderOfListOfCandidateAddressData={orderOfListOfCandidateAddressData}
      />
    </div>
  )
}

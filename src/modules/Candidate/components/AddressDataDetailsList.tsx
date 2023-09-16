import { CandidateKeysAddress } from '@/constants'
import { orderArrayBasedOnList } from '@/helpers'
import {
  CandidateDatabaseType,
  CandidateKeysAddressType,
} from '@/types/candidates'

type AddressDataDetailsListProps = {
  address: Pick<CandidateDatabaseType, 'address'>['address']
  orderOfListOfCandidateAddressData: Array<string>
}

export const AddressDataDetailsList = ({
  address,
  orderOfListOfCandidateAddressData,
}: AddressDataDetailsListProps) => {
  const keys = orderArrayBasedOnList(
    Object.keys(address),
    orderOfListOfCandidateAddressData,
  ) as Array<CandidateKeysAddressType>

  return (
    <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        {keys?.map((key) => (
          <div
            key={key}
            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
          >
            <dt className="font-medium text-gray-900">
              {CandidateKeysAddress[key]}
            </dt>
            <dd className="text-gray-700 sm:col-span-2">{address[key]}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

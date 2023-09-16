import { CandidateKeysWithoutAddressAndUploads } from '@/constants'
import { orderArrayBasedOnList } from '@/helpers'
import {
  CandidateDatabaseType,
  CandidatesKeysWithoutUploadsAndAddressType,
} from '@/types/candidates'

type PersonDataDetailsListProps = {
  candidate: Omit<
    CandidateDatabaseType,
    'uploads' | 'id' | 'coll' | 'ts' | 'address'
  >
  orderOfListOfCandidateData: Array<string>
}

export const PersonDataDetailsList = ({
  candidate,
  orderOfListOfCandidateData,
}: PersonDataDetailsListProps) => {
  const keys = orderArrayBasedOnList(
    Object.keys(candidate),
    orderOfListOfCandidateData,
  ) as Array<CandidatesKeysWithoutUploadsAndAddressType>

  return (
    <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        {keys?.map((key) => (
          <div
            key={key}
            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
          >
            <dt className="font-medium text-gray-900">
              {CandidateKeysWithoutAddressAndUploads[key]}
            </dt>
            <dd className="text-gray-700 sm:col-span-2">{candidate[key]}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

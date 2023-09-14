import {
  candidateDataFormatters,
  CandidateKeys,
  orderArrayBasedOnList,
} from '@/helpers'
import { CandidateDatabaseType, CandidatesKeys } from '@/types/candidates'

type DetailsListProps = {
  candidate: Omit<CandidateDatabaseType, 'uploads' | 'id' | 'coll' | 'ts'>
  orderOfListOfCandidateData: Array<string>
}

export const DetailsList = ({
  candidate,
  orderOfListOfCandidateData,
}: DetailsListProps) => {
  const keys = orderArrayBasedOnList(
    Object.keys(candidate),
    orderOfListOfCandidateData,
  ) as Array<CandidatesKeys>

  return (
    <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        {keys?.map((key) => (
          <div
            key={key}
            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
          >
            <dt className="font-medium text-gray-900">{CandidateKeys[key]}</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {candidateDataFormatters(candidate[key], key)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

import Link from 'next/link'
import { Fragment } from 'react'

import { CandidateDatabaseType } from '@/types/candidates'

type UploadsDataDetailsListProps = {
  uploads: Pick<CandidateDatabaseType, 'uploads'>['uploads']
}

export const UploadsDataDetailsList = ({
  uploads,
}: UploadsDataDetailsListProps) => {
  return (
    <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        {uploads?.map((file, index) => (
          <div
            key={file?.asset_id}
            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
          >
            <Fragment>
              <dt className="font-medium text-gray-900">Arquivo {index + 1}</dt>
              <dd className="text-gray-700 sm:col-span-2">
                <Link
                  href={file?.url}
                  target="_blank"
                  className="underline cursor-pointer text-matisse-600"
                >
                  Visualizar - {file?.original_filename}
                </Link>
              </dd>
            </Fragment>
          </div>
        ))}
      </dl>
    </div>
  )
}

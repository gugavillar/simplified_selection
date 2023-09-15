import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'
import { EmptyState } from '..'

type TableProps = {
  bodyData: Array<{
    id: string
    [key: string]: string | number | React.ReactNode
  }>
  headers: Array<{
    headerName: string
    dataAccessName: string
    isActionColumn?: boolean
  }>
  emptyState?: {
    title: string
    description: string
  }
}

export const Table = ({ bodyData, headers, emptyState }: TableProps) => {
  if (!bodyData?.length) {
    return (
      <EmptyState
        description={emptyState?.description}
        title={emptyState?.title}
      />
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <TableHeader headers={headers} />
        <TableBody headers={headers} bodyData={bodyData} />
      </table>
    </div>
  )
}

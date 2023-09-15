type TableHeaderProps = {
  headers: Array<{
    headerName: string
    dataAccessName: string
    isActionColumn?: boolean
  }>
}

export const TableHeader = ({ headers }: TableHeaderProps) => {
  return (
    <thead className="text-left">
      <tr>
        {headers?.map((header) => (
          <th
            key={header?.headerName}
            className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
          >
            {!header?.isActionColumn && header.headerName}
          </th>
        ))}
      </tr>
    </thead>
  )
}

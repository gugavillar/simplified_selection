type TableBodyType = {
  bodyData: Array<{
    id: string
    [key: string]: string | number | React.ReactNode
  }>
  headers: Array<{
    headerName: string
    dataAccessName: string
    isActionColumn?: boolean
  }>
}

export const TableBody = ({ bodyData, headers }: TableBodyType) => {
  return (
    <tbody className="divide-y divide-gray-200">
      {bodyData?.map((data) => (
        <tr className="even:bg-gray-50" key={data.id}>
          {headers?.map((header) => (
            <td
              key={header.dataAccessName}
              className="whitespace-nowrap p-4 font-medium text-gray-900"
            >
              {data[header.dataAccessName]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

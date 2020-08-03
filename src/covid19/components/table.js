import React from "react"
import Table from "react-bootstrap/Table"
import { useStateValue, selectePlace } from "../state/index"
import { nameMap } from "../data/citymap"

const DataTable = ({ headers, data }) => {
  const [, dispatch] = useStateValue()
  return (
    <div className="table_container">
      <Table striped hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>#</th>
            {headers.map(head => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr
              key={row.id}
              onMouseOver={() => {
                dispatch(selectePlace(nameMap[row.name]))
              }}
            >
              <td>{row.name}</td>
              <td>{row.total.confirm}</td>
              <td>{row.total.heal}</td>
              <td>{row.total.dead}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default DataTable

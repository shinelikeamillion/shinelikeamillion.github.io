import React from "react"
import Table from "react-bootstrap/Table"

const DataTable = ({ headers, data }) => (
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
          <tr key={row.id}>
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

export default DataTable

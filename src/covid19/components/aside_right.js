import React from "react"
import DataTable from "./table"
import Chart from "./right_chart"

const Right = ({ headers, data }) => (
  <div className="right">
    <h2>Cases Info</h2>
    <DataTable headers={headers} data={data} />
    <Chart data={data} />
  </div>
)

export default Right

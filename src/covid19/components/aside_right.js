import React from "react"
import DataTable from "./table"
import Chart from "./right_chart"

const Right = ({ data }) => {
  const headers = ["confirm", "heal", "dead"]
  const detail = Object.values(data.detail)
  return (
    <div className="right">
      <h2>Cases Info</h2>
      <DataTable headers={headers} data={detail} />
      <Chart data={detail} />
    </div>
  )
}

export default Right

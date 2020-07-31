import React from "react"
import DataTable from "./table"

const Right = ({ headers, data }) => (
  <div className="right">
    <h2>Cases Info</h2>
    <DataTable headers={headers} data={data} />

    <div>chart</div>
  </div>
)

export default Right

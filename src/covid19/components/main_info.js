import React from "react"

import { LungsVirus } from "@styled-icons/fa-solid/LungsVirus"
import { ShieldVirus } from "@styled-icons/fa-solid/ShieldVirus"
import { Addchart } from "@styled-icons/material-outlined/Addchart"
import { BarChartAlt2 } from "@styled-icons/boxicons-solid/BarChartAlt2"

const Info = ({ data }) => {
  const currentInfo = [
    {
      name: "Infected",
      value: data.total.confirm,
      icon: <BarChartAlt2 style={{ color: "#AC3D37" }} />,
      change: data.today.confirm,
    },
    {
      name: "Active",
      value: data.today.storeConfirm,
      icon: <Addchart style={{ color: "#EEC884" }} />,
      change: data.today.confirm,
    },
    {
      name: "Deaths",
      value: data.total.dead,
      icon: <LungsVirus style={{ color: "#FFFFFF" }} />,
      change: data.today.dead,
    },
    {
      name: "Recovered",
      value: data.total.heal,
      icon: <ShieldVirus style={{ color: "#76BFAD" }} />,
      change: data.today.heal,
    },
  ]
  return (
    <div className="info">
      {currentInfo.map(item => (
        <div key={item.name} className="item_info">
          {item.icon}
          <div className="item_content">
            <div className="content_top">
              <span className="top_name">{item.name}</span>
              <span className="top_change">{`${
                Number(item.change) > 0 ? "+" : ""
              }${item.change}`}</span>
            </div>
            <span className="value">{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Info

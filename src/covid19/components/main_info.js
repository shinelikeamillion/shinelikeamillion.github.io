import React from "react"

import { LungsVirus } from "@styled-icons/fa-solid/LungsVirus"
import { ShieldVirus } from "@styled-icons/fa-solid/ShieldVirus"
import { Addchart } from "@styled-icons/material-outlined/Addchart"
import { BarChartAlt2 } from "@styled-icons/boxicons-solid/BarChartAlt2"

const Info = ({ chinaTotal }) => {
  const currentInfo = [
    {
      name: "Infected",
      value: chinaTotal.total.confirm,
      icon: <BarChartAlt2 style={{ color: "#AC3D37" }} />,
      change: chinaTotal.today.confirm,
    },
    {
      name: "Active",
      value: chinaTotal.today.storeConfirm,
      icon: <Addchart style={{ color: "#EEC884" }} />,
      change: chinaTotal.today.confirm,
    },
    {
      name: "Deaths",
      value: chinaTotal.total.dead,
      icon: <LungsVirus style={{ color: "#FFFFFF" }} />,
      change: chinaTotal.today.dead,
    },
    {
      name: "Recovered",
      value: chinaTotal.total.heal,
      icon: <ShieldVirus style={{ color: "#76BFAD" }} />,
      change: chinaTotal.today.heal,
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
                Number(item.value) > 0 ? "+" : ""
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

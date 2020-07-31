import React from "react"
import Map from "./map"
import Info from "./main_info"
import Right from "./aside_right"
import jsonData from "../data/total_list.json"

const chinaDetial = jsonData.areaTree.find(item => item.name === "中国")
const chinaTotal = jsonData.chinaTotal
const worldDetail = jsonData.areaTree.filter(item => item.name !== "中国")

const sortedProvinces = Object.values(chinaDetial.children).sort(
  (a, b) => b.total.confirm - a.total.confirm
)
const chinaDataList = Object.values(sortedProvinces)
  .map(provience => ({
    name: provience.name,
    value: provience.total.confirm,
  }))
  .concat({ name: "南海诸岛", value: "0" })

const worlddataList = Object.values(worldDetail).map(contry => ({
  name,
  value: contry.total.confirm,
}))

const headers = ["confirm", "heal", "dead"]
const data = Object.values(sortedProvinces)

const Main = () => {
  return (
    <div className="main">
      <div className="content">
        <div className="title">
          <h1>Coronavirus COVID-19</h1>
          <span>China Cases</span>
        </div>
        <Info chinaTotal={chinaTotal} />
        <Map dataList={chinaDataList} />
      </div>
      <Right data={data} headers={headers} />
    </div>
  )
}

export default Main

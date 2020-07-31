import React from "react"
import jsonData from "../covid19/data/total_list.json"
import "../covid19/styles/covid_19.sass"
import Left from "../covid19/components/aside_left"
import Right from "../covid19/components/aside_right"
import Main from "../covid19/components/main"

const chinaDetial = jsonData.areaTree.find(item => item.name === "中国")
const chinaTotal = jsonData.chinaTotal
const worldDetail = jsonData.areaTree.filter(item => item.name !== "中国")

const sortedProvinces = Object.values(chinaDetial.children).sort(
  (a, b) => b.total.confirm - a.total.confirm
)
const chinaDataList = Object.values(sortedProvinces).map(provience => ({
  name: provience.name,
  value: provience.total.confirm,
}))

const worlddataList = Object.values(worldDetail).map(contry => ({
  name,
  value: contry.total.confirm,
}))

const headers = ["confirm", "heal", "dead"]
const data = Object.values(sortedProvinces)

const Covid_19 = () => {
  return (
    <div className="covid_19">
      <Left />
      {/* <Main chinaTotal={chinaTotal} chinaDataList={chinaDataList} />
      <Right data={data} headers={headers} /> */}
    </div>
  )
}

export default Covid_19

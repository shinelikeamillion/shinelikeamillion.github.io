import React, { useEffect, useState } from "react"
import echarts from "echarts"
import Toolbar from "./toolbar"
import Info from "./main_info"
import axios from "axios"
import { useStateValue } from "../state/index"
import { nameMap } from "../data/citymap"

const getOption = dataList => {
  let max = Math.max(...Object.values(dataList.map(item => item.value)))
  return {
    tooltip: {
      formatter: (params, ticket, callback) =>
        params.seriesName + "<br />" + params.name + "：" + params.value,
    },
    visualMap: {
      min: 0,
      // we consider the max value is 1000
      max: `${max > 1000 ? 1000 : max > 100 ? max : 100}`,
      left: "90%",
      top: "bottom",
      text: ["high", "low"],
      inRange: {
        color: ["#222222", "#F85E5E", "#FF3A3A", "#FF0000"],
      },
      textStyle: {
        color: "#eee",
      },
    },
    series: [
      {
        name: "confirmed cases",
        type: "map",
        map: "map",
        geoIndex: 0,
        data: dataList,
      },
    ],
  }
}

const getChinaData = dataList =>
  Object.values(dataList)
    .map(provience => ({
      name: provience.name,
      value: provience.total.confirm,
    }))
    .concat({ name: "南海诸岛", value: "0" })

const getProvienceData = (jsonData, provience) => {
  const cityNames = jsonData.features.map(feature => feature.properties.name)

  return cityNames.map(city => {
    const d = provience.children.find(child => city.startsWith(child.name))
    return {
      name: city,
      value: d ? d.value : 0,
    }
  })
}

const Map = ({ data }) => {
  const [state] = useStateValue()

  const chinaTotal = data.total

  const provienceWithCities = Object.values(data.detail).map(provience => ({
    name: provience.name,
    value: provience.total.confirm,
    children: provience.children.map(child => ({
      name: child.name,
      value: child.total.confirm,
    })),
    total: {
      today: provience.today,
      total: provience.total,
    },
  }))

  const provience = provienceWithCities.find(
    p =>
      p.name ===
      Object.keys(nameMap).find(f => nameMap[f] === state.selectedPlace)
  )

  useEffect(() => {
    const map = echarts.init(document.getElementById("map"))

    async function organizData() {
      const res = await axios.get(
        `../json/${state.selectedPlace !== "china" ? "province/" : ""}${
          state.selectedPlace
        }.json`
      )
      const jsonData = res.data

      echarts.registerMap("map", jsonData)

      const option = getOption(
        state.selectedPlace !== "china"
          ? getProvienceData(jsonData, provience)
          : getChinaData(data.detail)
      )
      map.setOption(option)
    }
    organizData()
    window.addEventListener("resize", () => map.resize())
  }, [state, data])

  return (
    <div className="map">
      <span className="bg_text">
        {Object.keys(nameMap).find(k => nameMap[k] === state.selectedPlace)}
      </span>
      <div className="map_title">
        <div className="place">
          Cases in <span>{state.selectedPlace}</span>
        </div>
        <Info
          data={state.selectedPlace !== "china" ? provience.total : chinaTotal}
        />
      </div>
      <div id="map"></div>
      <Toolbar nameMap={nameMap} />
    </div>
  )
}

export default Map

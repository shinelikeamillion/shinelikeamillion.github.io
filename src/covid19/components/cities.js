import React, { useEffect } from "react"
import echarts from "echarts"
import jsonData from "echarts/map/json/china-cities.json"

//  <Cities data={sortedProvinces} />
const Cities = ({ data }) => {
  const name = "test"

  const cities = Object.values(data)
    .map(provience => ({
      ...provience.children.map(child => ({
        name: child.name,
        value: child.total.confirm,
      })),
    }))
    .reduce((r, k) => r.concat(Object.values(k)), [])

  useEffect(() => {
    const cityNames = jsonData.features.map(feature => feature.properties.name)

    const mapedData = cityNames.map(city => {
      const d = cities.find(child => city.startsWith(child.name))
      return {
        name: city,
        value: d ? d.value : 0,
      }
    })

    console.log(cityNames.includes("襄阳"))
    console.log(cities.map(c => c.name))

    let max = Math.max(...Object.values(mapedData.map(item => item.value)))

    echarts.registerMap(name, jsonData)
    const map = echarts.init(document.getElementById(name))

    map.setOption({
      title: {
        text: `${name}疫情情况`,
      },
      coordinateSystem: "geo",
      tooltip: {
        trigger: "item",
        formatter: "{b}<br/>{c}",
      },
      visualMap: {
        min: 0,
        // we consider the max value is 200 this time
        max: `${max > 200 ? 200 : max}`,
        text: ["High", "Low"],
        realtime: false,
        calculable: true,
        inRange: {
          color: ["#222222", "#F85E5E", "#FF0000"],
        },
      },
      series: [
        {
          type: "map",
          mapType: name,
          label: {
            color: "#eee",
            fontSize: "4px",
            show: false,
          },
          data: mapedData,
        },
      ],
    })
  }, [])

  return (
    <div
      id={name}
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  )
}

export default Cities

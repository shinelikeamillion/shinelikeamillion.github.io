import React, { useEffect } from "react"
import echarts from "echarts"
import jsonData from "echarts/map/json/province/beijing.json"

const data = [
  { name: "丰台区", value: 273 },
  { name: "大兴区", value: 104 },
  { name: "海淀区", value: 82 },
  { name: "朝阳区", value: 77 },
  { name: "西城区", value: 59 },
  { name: "昌平区", value: 32 },
  { name: "通州区", value: 20 },
  { name: "房山区", value: 20 },
  { name: "东城区", value: 19 },
  { name: "平谷区", value: 0 },
  { name: "顺义区", value: 10 },
  { name: "密云区", value: 7 },
  { name: "怀柔区", value: 7 },
  { name: "延庆区", value: 1 },
  { name: "石景山区", value: 15 },
  { name: "门头沟区", value: 5 },
  { name: "外地来京", value: 25 },
  { name: "境外输入", value: 175 },
  { name: "未明确地区", value: 1 },
  { name: "境外输入人员", value: 0 },
]

const MapBJ = () => {
  useEffect(() => {
    echarts.registerMap("北京", jsonData)
    const map = echarts.init(document.getElementById("map"), "dark")
    map.setOption({
      title: {
        text: "北京疫情情况",
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}<br/>{c}",
      },
      visualMap: {
        min: 0,
        max: Math.max(...Object.values(data.map(item => item.value))),
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
          mapType: "北京",
          label: {
            color: "#eee",
            fontSize: "8px",
            show: true,
          },
          data,
        },
      ],
    })
  }, [])

  return (
    <div
      id="map"
      style={{
        width: "500px",
        height: "500px",
      }}
    ></div>
  )
}

export default MapBJ

import React, { useEffect } from "react"
import echarts from "echarts"

const Chart = ({ data }) => {
  let Axis = {}
  data.map((provience, index) => {
    Axis[`${provience.name}`] = provience.total.confirm
  })

  const option = {
    textStyle: {
      color: "#eee",
    },
    tooltip: {},
    xAxis: {
      data: Object.keys(Axis),
      axisLabel: {
        interval: 0,
        rotate: 90,
        fontSize: 8,
      },
    },
    grid: {
      top: "3%",
      left: "1%",
      bottom: 0,
      right: "1%",
      containLabel: true,
    },
    yAxis: {
      axisLabel: {
        formatter: value => {
          var label = Number(value)
          if (label > 10000) {
            label = `${(label / 10000).toFixed()}m`
          }
          if (label > 1000) {
            label = `${(label / 1000).toFixed()}k`
          }
          return label
        },
      },
    },
    series: [
      {
        name: "销量",
        type: "line",
        data: Object.values(Axis),
      },
    ],
  }

  useEffect(() => {
    const chart = echarts.init(document.getElementById("chart"), "dark")
    chart.setOption(option)
    window.addEventListener("resize", () => chart.resize())
  }, [data])
  return <div id="chart"></div>
}

export default Chart

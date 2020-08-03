import React, { useEffect } from "react"
import echarts from "echarts"
import axios from "axios"
// window
if (typeof window !== `undefined`) {
  import("leaflet")
  import("leaflet/dist/leaflet.css")
  import("echarts-leaflet")
}

/** learn it from this tutotial
 * https://medium.com/@Ovilia/making-a-covid-19-map-with-echarts-and-leaflet-30fdcd8739c6
 */

const baseOption = {
  tooltip: {
    show: true,
    formatter: function (params) {
      return params.value[3] + ":" + params.value[2]
    },
  },
  series: [
    {
      type: "scatter",
      animation: false,
      coordinateSystem: "leaflet",
      data: [],
      symbolSize: function (value) {
        return value[2] > 0 ? Math.log(value[2]) * 3 : 0
      },
      itemStyle: {
        color: "red",
        borderWidth: 2,
        borderColor: "rgba(255, 255, 255, 0.5)",
      },
    },
  ],
  visualMap: {
    type: "continuous",
    min: 0,
    max: 300,
    inRange: {
      color: ["orange", "red"],
      opacity: [0.5, 0.8],
    },
    dimension: 2,
  },
  leaflet: {
    center: [0, 40],
    roam: true,
    tiles: [
      {
        urlTemplate:
          "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
      },
    ],
  },
}

const World = () => {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("world"))
    chart.setOption(baseOption)

    axios
      .get(
        "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
      )
      .then(res => {
        var lines = res.data.split("\n")

        var result = []
        for (var i = 1; i < lines.length; ++i) {
          var columns = lines[i].split(",")

          for (var j = 4; j < columns.length; ++j) {
            var value = [
              columns[3],
              columns[2],
              columns[j],
              columns[0] + " " + columns[1],
            ]
            var id = j - 4
            if (result[id]) {
              result[id].push(value)
            } else {
              result[id] = [value]
            }
          }
        }

        var options = result.map(function (day) {
          return {
            series: {
              data: day,
            },
          }
        })

        chart.setOption({
          timeline: {
            axisType: "category",
            data: lines[0].split(",").slice(4),
            autoPlay: true,
            playInterval: 500,
            symbolSize: 4,
            tooltip: {
              formatter: function (params) {
                return params.name
              },
            },
            itemStyle: {
              color: "#ccc",
            },
            lineStyle: {
              color: "#eee",
            },
            label: {
              color: "#999",
            },
            checkpointStyle: {
              color: "red",
            },
            controlStyle: {
              borderColor: "#bbb",
            },
          },
          options: options,
        })
      })
      .catch(e => {
        console.log(e.message)
      })
  })

  return (
    <div
      id="world"
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  )
}

export default World

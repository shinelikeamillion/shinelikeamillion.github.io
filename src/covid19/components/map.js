import React, { useEffect } from "react"
import echarts from "echarts"
import "echarts/map/js/china"

const getOption = dataList => ({
  tooltip: {
    formatter: function (params, ticket, callback) {
      return params.seriesName + "<br />" + params.name + "：" + params.value
    },
  },
  visualMap: {
    min: 0,
    max: 1000,
    left: "left",
    top: "bottom",
    text: ["高", "低"],
    inRange: {
      color: ["#222222", "#F85E5E", "#FF3A3A", "#FF0000"],
    },
    show: false,
  },
  geo: {
    map: "china",
    roam: false,
    zoom: 1.23,
    label: {
      normal: {
        show: true,
        fontSize: "10",
        color: "rgba(255,255,255,0.7)",
      },
    },
    itemStyle: {
      normal: {
        borderColor: "rgba(255,255,255,0.4)",
      },
      emphasis: {
        borderColor: "#ffffff",
        areaColor: "#444",
      },
    },
  },
  series: [
    {
      name: "确诊人数",
      type: "map",
      geoIndex: 0,
      data: dataList,
    },
  ],
})

const Map = ({ dataList }) => {
  useEffect(() => {
    const map = echarts.init(document.getElementById("map"))
    map.setOption(getOption(dataList))
  }, [])
  return (
    <div className="map">
      <div id="map">
        <a> 地图</a>
      </div>
    </div>
  )
}

export default Map

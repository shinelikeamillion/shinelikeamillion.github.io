import React, { useEffect, Suspense } from "react"
import echarts from "echarts"
// import jsonData from "echarts/map/json/province/hubei.json"

/**
{provienceWithCities.slice(0, 4).map(pro => (
        <MapP key={pro.name} data={pro} />
      ))}
 */

const provienceMap = {
  安徽: "anhui",
  澳门: "aomen",
  北京: "beijing",
  重庆: "chongqing",
  福建: "fujian",
  甘肃: "gansu",
  广东: "guangdong",
  广西: "guangxi",
  贵州: "guizhou",
  海南: "hainan",
  河北: "hebei",
  黑龙江: "heilongjiang",
  河南: "henan",
  湖北: "hubei",
  湖南: "hunan",
  江苏: "jiangsu",
  江西: "jiangxi",
  吉林: "jilin",
  辽宁: "liaoning",
  内蒙古: "neimenggu",
  宁夏: "ningxia",
  青海: "qinghai",
  山东: "shandong",
  上海: "shanghai",
  山西: "shanxi",
  陕西: "shanxi1",
  四川: "sichuan",
  台湾: "taiwan",
  天津: "tianjin",
  香港: "xianggang",
  新疆: "xinjiang",
  西藏: "xizang",
  云南: "yunnan",
  浙江: "zhejiang",
}

const fetchJsonData = async name =>
  import(`echarts/map/json/province/${provienceMap[name]}.json`)

const MapBJ = ({ data }) => {
  const name = data.name

  useEffect(async () => {
    const jsonData = await fetchJsonData(name)

    const cityNames = jsonData.features
      .filter(feature => feature.type === "Feature")
      .map(feature => feature.properties.name)

    const mapedData = cityNames.map(city => {
      const d = data.children.find(child => city.startsWith(child.name))
      return {
        name: city,
        value: d ? d.value : 0,
      }
    })

    let max = Math.max(...Object.values(mapedData.map(item => item.value)))

    console.log(mapedData.map(item => item.value))

    echarts.registerMap(name, jsonData)
    const map = echarts.init(document.getElementById(name), "dark")
    map.setOption({
      title: {
        text: `${name}疫情情况`,
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}<br/>{c}",
      },
      visualMap: {
        min: 0,
        // we consider the max value is 1000
        max: `${max > 1000 ? 1000 : max}`,
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
            fontSize: "8px",
            show: true,
          },
          data: mapedData,
        },
      ],
    })
  }, [data])

  return (
    <div
      id={name}
      style={{
        width: "500px",
        height: "500px",
      }}
    ></div>
  )
}

export default MapBJ

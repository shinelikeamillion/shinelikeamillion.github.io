import React from "react"
import Table from "react-bootstrap/Table"

const sources = {
  react: "https://zh-hans.reactjs.org/docs/getting-started.html",
  sass: "https://sass-lang.com/",
  data: "https://raw.githubusercontent.com/CSSEGISandData/",
  design: "https://dribbble.com/shots/11033647-Virus-COVID-19-Tracker",
  gatsby: "https://www.gatsbyjs.org/",
  echart: "https://echarts.apache.org/zh/index.html",
  bootstrap: "https://react-bootstrap.github.io/",
}

const OpenSources = () => (
  <div className="open_sources">
    <Table striped variant="dark">
      <tbody>
        {Object.keys(sources).map(key => (
          <tr key={key}>
            <td>
              <span>{key} </span>
            </td>
            <td>
              <a href={sources[key]}>{sources[key]}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
)

export default OpenSources

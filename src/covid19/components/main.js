import React from "react"
import Map from "./map"
import Right from "./aside_right"
import World from "./world"
import OpenSource from "./open_sources"
import ME from "./me"
import { useStateValue } from "../state/index"

const initContent = state => {
  switch (state.tabIndex) {
    case 0:
      return (
        <>
          <div className="content">
            <h1 className="title">
              Coronavirus <span>COVID-19</span>
            </h1>
            <Map data={state.china} />
          </div>
          <Right data={state.china} />
        </>
      )
    case 1:
      return <World />
    case 2:
      return <OpenSource />
    case 3:
      return <ME />
  }
}

const Main = () => {
  const [state] = useStateValue()
  // console.log(state.tabIndex)
  return <div className="main">{initContent(state)}</div>
}

export default Main

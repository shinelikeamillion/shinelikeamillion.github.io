import React from "react"
import "../covid19/styles/covid_19.sass"
import Left from "../covid19/components/aside_left"
import Main from "../covid19/components/main"
import { reducer, StateProvider } from "../covid19/state/index"

const Covid_19 = () => {
  return (
    <StateProvider reducer={reducer}>
      <div className="covid_19">
        <Left />
        <Main />
      </div>
    </StateProvider>
  )
}

export default Covid_19

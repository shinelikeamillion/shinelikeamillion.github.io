import React from "react"
import "../covid19/styles/covid_19.sass"
import Left from "../covid19/components/aside_left"
import Main from "../covid19/components/main"
import HK from "../covid19/components/HK"

const Covid_19 = () => {
  return (
    <div className="covid_19">
      <Left />
      {/* <Main /> */}
      <HK />
    </div>
  )
}

export default Covid_19

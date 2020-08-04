import React from "react"
import SearchBar from "./searchbar"

import { Settings } from "@styled-icons/ionicons-sharp/Settings"

const Toolbar = ({ nameMap }) => {
  return (
    <div className="toolbar">
      <SearchBar nameMap={nameMap} />
      <a className="setting">
        <Settings />
      </a>
    </div>
  )
}

export default Toolbar

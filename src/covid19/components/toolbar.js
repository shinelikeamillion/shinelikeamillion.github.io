import React from "react"
import SearchBar from "./searchbar"

import { SearchOutline } from "@styled-icons/evaicons-outline/SearchOutline"
import { Settings } from "@styled-icons/ionicons-sharp/Settings"

const Toolbar = ({ nameMap }) => {
  return (
    <div className="toolbar">
      <SearchBar nameMap={nameMap} />
      <a className="search">
        <SearchOutline />
      </a>
      <a className="setting">
        <Settings />
      </a>
    </div>
  )
}

export default Toolbar

import React from "react"

import { SearchOutline } from "@styled-icons/evaicons-outline/SearchOutline"
import { Settings } from "@styled-icons/ionicons-sharp/Settings"

const Toolbar = () => (
  <div className="toolbar">
    <a className="search">
      <SearchOutline />
    </a>
    <a className="setting">
      <Settings />
    </a>
  </div>
)

export default Toolbar

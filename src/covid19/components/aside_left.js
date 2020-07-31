import React from "react"

import { Virus } from "@styled-icons/fa-solid/Virus"
import { Sick } from "@styled-icons/material-rounded/Sick"
import { Global } from "@styled-icons/remix-fill/Global"
import { CurrentLocation } from "@styled-icons/boxicons-regular/CurrentLocation"

const Left = () => (
  <div className="left">
    <a className="logo">
      <Virus />
    </a>
    <ul>
      <li>
        <CurrentLocation />
      </li>
      <li>
        <Global />
      </li>
      <li>
        <Sick />
      </li>
      <li>
        <Sick />
      </li>
      <li>
        <Sick />
      </li>
    </ul>
  </div>
)

export default Left

import React, { useState } from "react"

import { Virus } from "@styled-icons/fa-solid/Virus"
import { Sick } from "@styled-icons/material-rounded/Sick"
import { Global } from "@styled-icons/remix-fill/Global"
import { CurrentLocation } from "@styled-icons/boxicons-regular/CurrentLocation"
import { OpenSource } from "@styled-icons/remix-fill/OpenSource"
import { AboutDotMe } from "@styled-icons/simple-icons/AboutDotMe"
import { useStateValue, tabIndex } from "../state/index"

const Left = () => {
  const navs = [<CurrentLocation />, <Global />, <OpenSource />, <AboutDotMe />]
  const label = ["location", "global", "open source", "about me"]

  const [state, dispatch] = useStateValue()

  return (
    <div className="left">
      <a className="logo">
        <Virus />
      </a>
      <ul>
        {navs.map((nav, i) => (
          <li
            key={i}
            className={i === state.tabIndex ? "active" : undefined}
            onClick={() => {
              dispatch(tabIndex(i))
            }}
          >
            {nav}
            <a>{label[i]}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Left

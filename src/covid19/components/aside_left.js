import React, { useState } from "react"

import { Virus } from "@styled-icons/fa-solid/Virus"
import { Sick } from "@styled-icons/material-rounded/Sick"
import { Global } from "@styled-icons/remix-fill/Global"
import { CurrentLocation } from "@styled-icons/boxicons-regular/CurrentLocation"
import { OpenSource } from "@styled-icons/remix-fill/OpenSource"
import { AboutDotMe } from "@styled-icons/simple-icons/AboutDotMe"

const Left = () => {
  const navs = [<CurrentLocation />, <Global />, <OpenSource />, <AboutDotMe />]
  const label = ["location", "global", "open source", "about me"]
  const [index, setIndex] = useState(0)

  return (
    <div className="left">
      <a className="logo">
        <Virus />
      </a>
      <ul>
        {navs.map((nav, i) => (
          <li
            key={i}
            className={i === index ? "active" : undefined}
            onClick={() => {
              setIndex(i)
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

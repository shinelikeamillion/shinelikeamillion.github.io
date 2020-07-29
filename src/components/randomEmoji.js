import React, { useState } from "react"
import { randomEmoji } from "../utils/utils"

/**
 * WE DO LOVE EMOJI !!
 */

let interValId = 0
const RandomEmoji = () => {
  const [emoji, setEmoji] = useState(randomEmoji())

  clearInterval(interValId)
  interValId = setInterval(() => {
    setEmoji(randomEmoji())
  }, 300)

  return (
    <a
      style={{
        display: "flex",
        fontSize: "200px",
        padding: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span>{emoji}</span>
    </a>
  )
}

export default RandomEmoji

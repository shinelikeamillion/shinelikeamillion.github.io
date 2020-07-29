function randomInt(min, max) {
  var result = parseInt(Math.random() * (max - min) + min)
  // filter
  if (result >= 0x1f650 && result < 0x1f680) {
    result = randomInt(min, max)
  }
  return result
}

function randomEmoji() {
  return String.fromCodePoint(randomInt(0x1f601, 0x1f6b9 + 1))
}

function intoFavionWithEmoji() {
  if (typeof document === "undefined") return
  const favicon = document.querySelector("link[rel=icon]")
  if (favicon) {
    favicon.setAttribute("data-emoji", randomEmoji())
    const emoji = favicon.getAttribute("data-emoji")

    if (emoji) {
      const canvas = document.createElement("canvas")
      canvas.height = 64
      canvas.width = 64

      const ctx = canvas.getContext("2d")
      ctx.font = "64px serif"
      ctx.fillText(emoji, 0, 64)
      favicon.href = canvas.toDataURL()
    }
  }
}

export { intoFavionWithEmoji, randomEmoji }

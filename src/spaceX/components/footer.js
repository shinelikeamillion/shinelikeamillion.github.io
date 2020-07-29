import React from "react"
import { Link } from "gatsby"
import { Twitter, Instagram, Youtube } from "@styled-icons/boxicons-logos"

/** get your icons here
 * https://styled-icons.js.org/?s=%40styled-icons
 */

const Footer = () => (
  <div className="footer">
    <div className="social-media">
      <span>Social Media</span>
      <Twitter />
      <Instagram />
      <Youtube />
    </div>
    <a>
      SpaceX designs, manufactures and launches advanced rockets and spacecraft.
    </a>
  </div>
)

export default Footer

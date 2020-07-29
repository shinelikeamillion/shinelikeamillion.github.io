import React from "react"

import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: "#555",
    }}
  >
    <SEO title="404: Not found" />
    <div
      style={{
        display: "block",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          display: "block",
          fontSize: "400px",
          padding: "10px",
          fontFamily: "Bungee Outline, cursive",
          letterSpacing: ".1em",
          color: "#eee",
        }}
      >
        404
      </h1>
      <Link to="/">
        <span
          style={{
            fontSize: "30px",
          }}
        >
          go back
        </span>
      </Link>
    </div>
  </div>
)

export default NotFoundPage

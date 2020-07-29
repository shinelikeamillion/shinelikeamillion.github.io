import React from "react"
import Header from "./header"
import Copyright from "./copyright"
import "../styles/layout.css"

const Layout = ({ headers, children }) => (
  <div className="container">
    <div className="background"></div>
    <Header headers={headers} />
    <Copyright />
    <main>{children}</main>
  </div>
)

export default Layout

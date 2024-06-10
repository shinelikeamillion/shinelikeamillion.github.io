import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Firebase from "../components/firebase"
import { intoFavionWithEmoji } from "../utils/utils"

const IndexPage = () => {
  intoFavionWithEmoji()
  return (
    <Layout>
      <SEO title="Home" />
      <Firebase />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          userSelect: "none",
          minHeight: "100vh",
        }}
      >
        <div>
          <a> Doing something special,</a>
          <br />
          <a> Just need take a break, and hope you all doing well. </a>
          <a href="https://www.notion.so/SeanMatro-d238ac31d11f4b068da534f9fffa6978">
            👋
          </a>
          <br />
          <a href="./p5/index.html">-</a>
          <span>&nbsp;&nbsp;</span>
          <a href="https://next-seanmatros-projects.vercel.app">⚭</a>
          <div>
            <iframe
              frameBorder="no"
              marginWidth="0"
              marginHeight="0"
              width="330px"
              height="450px"
              src="https://music.163.com/outchain/player?type=4&id=350330919&auto=0&height=430"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

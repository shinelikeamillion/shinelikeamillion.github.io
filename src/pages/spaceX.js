import React from "react"
import Layout from "../spaceX/components/layout"
import Contents from "../spaceX/components/content"
import Footer from "../spaceX/components/footer"
import { Helmet } from "react-helmet"

const headers = ["Falcon 9", "Falcon Heavy", "Drgon", "Updates"]

const missions = [
  {
    title: "starlink",
    content: `SpaceX's Starlink is a next-generation satellite network capable of connecting
    the globe. especially reaching those who are not yet connected. with reliable
    and affordable broadband internet services`,
  },
]

const SpaceXPage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover, maximum-scale=1, minimum-scale=1, user-scalable=no"
      />
    </Helmet>
    <Layout headers={headers}>
      <Contents missions={missions} />
      <Footer />
    </Layout>
  </div>
)

export default SpaceXPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome to Think About It</h1>
    <p>We show the rules of safety in short animations.</p>
    <p>This is WHATDOYOUKNOW? he is going to appear in our short animations.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">
      <h4>Go to E-safety project</h4>
    </Link>
  </Layout>
)

export default IndexPage

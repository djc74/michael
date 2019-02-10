import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Welcome to our E-safety project</h1>

    <Link to="/">GO TO THE FRONTPAGE</Link>
  </Layout>
)

export default SecondPage

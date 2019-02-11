import React from "react"
import { Link } from "gatsby"
import { Video, Transformation } from "cloudinary-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Welcome to our E-safety project</h1>
    <Video
      cloudName="big-tent"
      publicId="Michael/e-safety"
      style={{ maxWidth: `700px`, marginBottom: `1.45rem` }}
      controls
    />
    <Link to="/" style={{ display: `block` }}>
      <h4>Go to the front page</h4>
    </Link>
  </Layout>
)

export default SecondPage

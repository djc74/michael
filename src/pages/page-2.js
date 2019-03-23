import React from "react"
import { Link } from "gatsby"
import { Video } from "cloudinary-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="E-safety" />
    <h1>Welcome to our E-safety project</h1>
    <Video
      cloudName="big-tent"
      publicId="Michael/e-safety"
      style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}
      controls
    />
    <h3>You shouldn't give your personal information away.</h3>
    <Link to="/" style={{ display: `block` }}>
      <h4>Go to the front page</h4>
    </Link>
  </Layout>
)

export default SecondPage

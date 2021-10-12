import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
const getImage = () => {
  const props = {
    width: 150,
    // height: 150,
    formats: ["auto", "webp", "avif"],
    alt: "A Gatsby astronaut",
    style: { marginBottom: `1.45rem` },
  }
  return [
    <StaticImage src={"../images/zd/1.png"} {...props} />,
    <StaticImage src={"../images/zd/2.png"} {...props} />,
    <StaticImage src={"../images/zd/3.png"} {...props} />,
    <StaticImage src={"../images/zd/4.png"} {...props} />,
    <StaticImage src={"../images/zd/5.png"} {...props} />,
    <StaticImage src={"../images/zd/6.png"} {...props} />,
    <StaticImage src={"../images/zd/7.png"} {...props} />,
    <StaticImage src={"../images/zd/8.png"} {...props} />,
  ]
}
const SecondPage = () => {
  return (
    <Layout>
      <Seo title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      <div
        style={{
          display: "flex",
          // width: "150px",
          height: "300px",
          flexFlow: "column",
          flexWrap: "wrap",
          margin: "50px 0 0 0",
        }}
      >
        {getImage().map(item => (
          <div
            style={{
              width: "150px",
              padding: "10px",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default SecondPage

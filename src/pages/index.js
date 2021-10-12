import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>欢迎来到我的网站</p>
    <p>Now go build something great.</p>
    <StaticImage
      src={"../images/gatsby-astronaut.png"}
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
        <a onClick={()=>{window.open("https://github.com/1sunzichen")}}>
            <StaticImage
                src="./github.png"
                width={30}
                quality={30}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
            />
        </a>
      <Link to="/page-2/">zd</Link> <br />
      {/*<Link to="/using-typescript/">Go to "Using TypeScript"</Link>*/}
    </p>
  </Layout>
)

export default IndexPage

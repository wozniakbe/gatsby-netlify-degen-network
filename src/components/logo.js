import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Logo = (props) => (
  <div className="site-logo">
    <Link to="/"><Img 
              fluid={props.file.childImageSharp.fluid} 
              alt={'ProAmPicks - Featured image'}
              className="featured-image"
            /></Link>
  </div>
)

export default Logo

// export const pageQuery = graphql`
//   query {
//     fileName: file(relativePath: { eq: "assets/pro_am_picks.jpeg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400, maxHeight: 250) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
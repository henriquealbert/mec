import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Luz() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "lampps.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 245, height: 350) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.file.childImageSharp.fixed} alt="Logo Mec" />
}

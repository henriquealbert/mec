import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Juntas() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "juntas.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Img fixed={data.file.childImageSharp.fixed} alt="Dayra Liz e Pamela" />
  )
}

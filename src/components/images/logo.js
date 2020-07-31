import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Logo() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-2.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 175, height: 45) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.file.childImageSharp.fixed} alt="Logo Mec" />
}

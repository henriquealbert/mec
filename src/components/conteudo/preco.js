import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export default function Preco() {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      Tag="section"
      className="bg-image"
      fluid={data.bg.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <section className="text-gray-400 body-font ">
        <div className="container mx-auto  px-5 py-24  items-center">
          <h2
            style={{ textTransform: 'uppercase' }}
            className="title-font sm:text-5xl text-4xl text-center mb-4 font-bold text-white"
          >
            Este é o seu momento
          </h2>
          <div className="sm:flex mt-8 sm:mt-16 justify-evenly mx-auto items-center">
            <h3 className=" text-2xl text-center sm:w-1/2 lg:w-1/3">
              Seu investimento na Mentoria mais Completa do Brasil é de apenas:
            </h3>
            <div>
              <p className="text-5xl font-bold text-center text-yellow-600">
                R$ 697,00
              </p>
              <p className="text-center">
                à vista ou em até 12x no cartão de crédito
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10 sm:mt-20">
            <a
              href="https://pag.ae/7WeChbNcH"
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-white bg-blue-500 border-0 py-4 px-8 focus:outline-none hover:bg-blue-600 rounded text-xl font-bold"
            >
              QUERO ME INSCREVER AGORA ➡️
            </a>
          </div>
        </div>
      </section>
    </BackgroundImage>
  )
}

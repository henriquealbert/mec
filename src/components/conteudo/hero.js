import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Juntas from '../images/juntas'
import Logo from '../images/logo'

export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="text-gray-700 body-font">
      <BackgroundImage
        Tag="section"
        className="bg-image"
        fluid={data.background.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        <div className="container mx-auto flex items-center justify-center pt-6">
          <Logo />
        </div>

        <div className="container mx-auto flex px-5 pt-12 items-center justify-center flex-col">
          <h1
            style={{ textTransform: 'uppercase' }}
            className="title-font sm:text-4xl text-2xl mb-4 font-bold text-white sm:w-2/3 text-center"
          >
            Aprenda a Estruturar sua Consultoria do{' '}
            <span className="text-yellow-600 font-black">ZERO</span> em apenas
            30 dias
          </h1>
          <Juntas />
        </div>
      </BackgroundImage>

      <div className="flex justify-center pt-16">
        <a
          href="https://pag.ae/7WhAC1_64"
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-white bg-blue-500 border-0 mx-4 py-4 px-8 focus:outline-none hover:bg-blue-600 rounded text-xl font-bold"
        >
          QUERO ME INSCREVER AGORA ➡️
        </a>
      </div>
      <div className="mx-auto pt-12 text-center lg:w-2/3 w-full">
        <h2 className="title-font sm:text-3xl font-bold text-2xl mb-4 font-medium text-gray-900">
          O que é o Segredos da Consultoria?
        </h2>
        <p className="mb-20 leading-relaxed text-lg sm:w-3/4 text-center mx-auto text-yellow-800">
          É uma mentoria 100% online onde você terá acesso a aulas completas que
          irão te ajudar a <u>estruturar sua Consultoria do ZERO</u>. Se torne
          um Engenheiro Consultor que possui um negócio competitivo, que sabe
          atrair clientes, vender e ter um leque de opções de serviços.
        </p>
      </div>
    </section>
  )
}

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Juntas from './images/juntas'
import Logo from './images/logo'

export default function Sales() {
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
    <>
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
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-black text-white w-2/3 text-center">
              Aprenda a Estruturar sua Consultoria do ZERO em apenas 30 dias
            </h1>
            <Juntas />
          </div>
        </BackgroundImage>

        <div className="flex justify-center pt-16">
          <button className="inline-flex text-white bg-blue-500 border-0 py-4 px-12 focus:outline-none hover:bg-blue-600 rounded text-xl font-bold">
            QUERO ME INSCREVER AGORA!
          </button>
        </div>
        <div className="mx-auto pt-12 text-center lg:w-2/3 w-full">
          <h2 className="title-font sm:text-3xl font-bold text-2xl mb-4 font-medium text-gray-900">
            O que é o Segredos da Consultoria?
          </h2>
          <p className="mb-20 leading-relaxed text-lg w-3/4 text-center mx-auto">
            É uma mentoria 100% online onde você terá acesso a aulas completas
            que irão te ajudar a estruturar sua Consultoria do ZERO. Se torne um
            Engenheiro Consultor que possui um negócio competitivo, que sabe
            atrair clientes, vender e ter um leque de opções de serviços.
          </p>
        </div>
      </section>
      {/* // */}
      <section className="text-gray-700 body-font bg-blue-900">
        <div className="container px-5 py-16 mx-auto">
          <div className="text-center">
            <h2 className="text-white sm:text-3xl text-2xl font-medium text-center title-font  mb-4">
              A Mentoria mais completa do Brasil
            </h2>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        <section className="text-gray-700 pb-20 body-font">
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-8 lg:w-1/3 sm:w-1/2 w-full">
                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1">
                  <p className="mb-6 text-white">
                    <span className="bg-yellow-500 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Aprenda a Estruturar sua Consultoria do zero.
                  </p>
                  <p className="mb-6 text-white">
                    <span className="bg-yellow-500 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    2 mentoras que são engenheiras, que irão te apoiar e
                    orientar nas suas tomadas de decisões.
                  </p>
                  <p className="mb-6 text-white">
                    <span className="bg-yellow-500 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Perder o medo de atuar na consultoria, não importando a
                    idade ou experiência.
                  </p>
                  <p className="mb-6 text-white">
                    <span className="bg-yellow-500 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Clareza, encontrando sua paixão profissional com retorno
                    financeiro
                  </p>
                  <p className="mb-6 text-white">
                    <span className="bg-yellow-500 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Criação de autoridade na sua área de atuação
                  </p>
                </nav>
              </div>
              <div className="p-8 lg:w-1/3 sm:w-1/2 w-full">
                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1">
                  <p className="mb-6 text-white">
                    <span className="bg-yellow-500 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Evitar diversos erros de Consultores iniciantes
                  </p>
                  <p className="mb-6 text-white">
                    <span className="bg-yellow-500 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Foco e comprometimento com o seu negócio, fazendo ele
                    acontecer
                  </p>
                  <p className="mb-6 text-white">
                    <span className="bg-yellow-500 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Evitar diversos gastos desnecessários que muitos consultores
                    desavisados cometem
                  </p>
                  <p className="mb-6 text-white">
                    <span className="bg-yellow-500 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Crescimento acelerado como consultor
                  </p>
                  <p className="mb-6 text-white">
                    <span className="bg-yellow-500 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Aprender a atrair clientes e vender
                  </p>
                </nav>
              </div>
              <div className="p-8 lg:w-1/3 sm:w-1/2 w-full">
                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1">
                  <p className="mb-6 text-white">
                    <span className="bg-yellow-500 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Aprenda a precificar o seu trabalho
                  </p>
                  <p className="mb-6 text-white">
                    <span className="bg-yellow-500 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Aprenda a criar uma proposta matadora de venda
                  </p>
                  <p className="mb-6 text-white">
                    <span className="bg-yellow-500 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Criação de portifólio
                  </p>
                  <p className="mb-6 text-white">
                    <span className="bg-yellow-500 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Desenvolvimento da segurança e confiança como consultor
                  </p>
                  <p className="mb-6 text-white">
                    <span className="bg-yellow-500 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Utilizar as redes sociais ao seu favor, passando autoridade,
                    credibilidade e escalando o seu negócio.
                  </p>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/*  */}
      <h1>MENTORAS</h1>
      <h1>BONUS</h1>
      <h1>DEPOIMENTOS</h1>
      <h1>CONTEUDO DA MENTORIA</h1>
      <h1>PREÇO</h1>
      <h1>FAQ</h1>
    </>
  )
}

import React from 'react'

export default function Ementa() {
  return (
    <section className="text-gray-700 body-font bg-blue-900">
      <div className="container px-5 pt-24 mx-auto flex flex-wrap">
        <h2 className="text-white text-center mx-auto text-4xl font-bold mb-12">
          COMO É ESTRUTURADO AS AULAS DA MENTORIA?
        </h2>

        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-white p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white text-blue-500 flex-shrink-0">
                <span className="text-4xl font-black">1</span>
              </div>
              <div className="flex-grow">
                <h2 className="text-yellow-500 text-xl title-font font-bold mb-3">
                  Encontro 1
                </h2>
                <p className="leading-relaxed text-gray-400 text-base">
                  Definição de Nicho, Estudo da Persona, Necessidade e Pesquisa
                  de Mercado, Entendendo o Seu Legado.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-white p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white text-blue-500 flex-shrink-0">
                <span className="text-4xl font-black">2</span>
              </div>
              <div className="flex-grow">
                <h2 className="text-yellow-500 text-xl title-font font-bold mb-3">
                  Encontro 2
                </h2>
                <p className="leading-relaxed text-gray-400 text-base">
                  Construção do Plano de Negócios, Brainstorming da Esteira de
                  Serviços, Análise Estratégica
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-white p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white text-blue-500 flex-shrink-0">
                <span className="text-4xl font-black">3</span>
              </div>
              <div className="flex-grow">
                <h2 className="text-yellow-500 text-xl title-font font-bold mb-3">
                  Encontro 3
                </h2>
                <p className="leading-relaxed text-gray-400 text-base">
                  Definição de Metas e Objetivos, Ferramentas de Ouro, Como
                  atrair clientes
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-white p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white text-blue-500 flex-shrink-0">
                <span className="text-4xl font-black">4</span>
              </div>
              <div className="flex-grow">
                <h2 className="text-yellow-500 text-xl title-font font-bold mb-3">
                  Encontro 4
                </h2>
                <p className="leading-relaxed text-gray-400 text-base">
                  Criação de portifolio, criação de proposta, Precificação, Como
                  vender e manejar objeções
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

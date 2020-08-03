import React from 'react'
import Juntas from '../images/juntas'

export default function Mentoras() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2
            style={{ textTransform: 'uppercase' }}
            className="title-font sm:text-3xl text-2xl mb-4 font-bold text-gray-900"
          >
            Conheça mais sobre o projeto
          </h2>
          <p className="mb-8 leading-relaxed lg:w-4/5 text-yellow-800">
            Quando nós nos conhecemos e juntamos todo nosso conhecimento e
            experiência como consultoras, otimizamos os nossos projetos de
            consultoria: desde a forma de captar clientes, vender, o processo em
            si, o marketing, criação de estratégias…
          </p>
          <p className="mb-8 leading-relaxed lg:w-4/5 text-yellow-800">
            Entendemos então que a nossa missão também era compartilhar o nosso
            conhecimento com os outros engenheiros!
            <br />E assim nasceu o Mentoria de Engenheiros Consultores (MEC).
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2">
          <Juntas classe="object-cover object-center rounded-full" />
        </div>
      </div>
    </section>
  )
}

import React from 'react'

import Depo1 from '../../images/depo-1.jpeg'
import Depo2 from '../../images/depo-2.jpeg'
import Depo3 from '../../images/depo-3.jpeg'
import Depo4 from '../../images/depo-4.jpeg'
import Depo5 from '../../images/depo-5.jpeg'
import Depo6 from '../../images/dep.jpg'
import Depo7 from '../../images/dep1.jpeg'
import Depo8 from '../../images/dep2.jpg'
import Depo9 from '../../images/dep3.jpeg'
import Depo10 from '../../images/dep4.jpg'
import Depo11 from '../../images/dep5.jpeg'
import Depo12 from '../../images/dep6.jpg'

export default function Depoimentos() {
  return (
    <section className="text-gray-700 body-font py-20">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <h2
          style={{ textTransform: 'uppercase' }}
          className="title-font sm:text-3xl text-center text-2xl mb-16 font-bold text-gray-900 mx-auto"
        >
          Veja o depoimento dos nossos mentorados
        </h2>
      </div>
      <div className="flex flex-row flex-wrap mx-auto justify-center items-center ">
        <img
          className="px-4 sm:w-3/5 lg:w-1/5 mx-4 shadow-md mb-6 rounded-lg"
          src={Depo1}
          alt=""
        />
        <img
          className="px-4 sm:w-3/5 lg:w-1/5 mx-4 shadow-md mb-6 rounded-lg"
          src={Depo2}
          alt=""
        />
        <img
          className="px-4 sm:w-3/5 lg:w-1/5 mx-4 shadow-md mb-6 rounded-lg"
          src={Depo3}
          alt=""
        />
        <img
          className="px-4 sm:w-3/5 lg:w-1/5 mx-4 shadow-md mb-6 rounded-lg"
          src={Depo4}
          alt=""
        />
        <img
          className="px-4 sm:w-3/5 lg:w-1/5 mx-4 shadow-md mb-6 rounded-lg"
          src={Depo5}
          alt=""
        />
        <img
          className="px-4 sm:w-3/5 lg:w-1/5 mx-4 shadow-md mb-6 rounded-lg"
          src={Depo6}
          alt=""
        />
        <img
          className="px-4 sm:w-3/5 lg:w-1/5 mx-4 shadow-md mb-6 rounded-lg"
          src={Depo7}
          alt=""
        />
        <img
          className="px-4 sm:w-3/5 lg:w-1/5 mx-4 shadow-md mb-6 rounded-lg"
          src={Depo8}
          alt=""
        />
        <img
          className="px-4 sm:w-3/5 lg:w-1/5 mx-4 shadow-md mb-6 rounded-lg"
          src={Depo9}
          alt=""
        />
        <img
          className="px-4 sm:w-3/5 lg:w-1/5 mx-4 shadow-md mb-6 rounded-lg"
          src={Depo10}
          alt=""
        />
        <img
          className="px-4 sm:w-3/5 lg:w-1/5 mx-4 shadow-md mb-6 rounded-lg"
          src={Depo11}
          alt=""
        />
        <img
          className="px-4 sm:w-3/5 lg:w-1/5 mx-4 shadow-md mb-6 rounded-lg"
          src={Depo12}
          alt=""
        />
      </div>
    </section>
  )
}

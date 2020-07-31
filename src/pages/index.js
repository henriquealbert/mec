import React from 'react'

import Footer from '../components/footer'
import SEO from '../components/seo'
import Sales from '../components/sales'

function IndexPage() {
  return (
    <div className="bg-home">
      <SEO keywords={[`engenharia`, `mentoria`, ``]} title="Inscrição" />
      <main>
        <Sales />
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage

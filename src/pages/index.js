import React from 'react'

import Footer from '../components/footer'
import SEO from '../components/seo'

function IndexPage() {
  return (
    <div className="bg-home">
      <SEO keywords={[`engenharia`, `mentoria`, ``]} title="Home" />
      <main>
        <h1>MEC</h1>
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage

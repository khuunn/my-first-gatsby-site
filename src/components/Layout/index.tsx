import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
import * as React from 'react'
import Header from './Header'

deckDeckGoHighlightElement()

interface LayoutProps {
  pageTitle?: string
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div className="py-5 px-5">
      <Header />
      <main>
        <h1 className="text-5xl mb-6">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

Layout.defaultProps = {
  pageTitle: 'Default title',
}

export default Layout

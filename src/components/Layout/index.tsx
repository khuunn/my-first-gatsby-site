import * as React from 'react'
import { Link } from 'gatsby'

interface LayoutProps {
  pageTitle?: string
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      <nav>
        <ul className='flex space-x-4'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className="text-5xl font-bold py-4">{pageTitle}</h1>
        {children}
      </main>
    </>
  )
}

Layout.defaultProps = {
  pageTitle: 'Default title'
}

export default Layout
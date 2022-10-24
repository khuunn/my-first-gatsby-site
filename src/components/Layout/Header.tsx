import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => {
  return (
    <header className="flex items-center justify-between h-20 mb-10">
      <div className="w-24">
        <StaticImage src="../../images/gamc.png" alt="logo" />
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

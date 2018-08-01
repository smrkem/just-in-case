import React from 'react'
import { Link } from 'react-static'

const Header = (props) => {
  return (
    <header>
        <nav className="navbar">
          <Link className="navbar-brand" to="/">Just In Case</Link>
        </nav>
    </header>
  )
}

export default Header
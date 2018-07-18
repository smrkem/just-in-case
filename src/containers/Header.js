import React from 'react'
import { Link } from 'react-static'

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">Just In Case</Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link exact to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">Blog</Link>        
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
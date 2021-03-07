import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = () => (
  <header id="divHeader">
    <div id="divLogo">
      <Link to="/"></Link>
    </div>
    <div id="divHeaderContent">
      <nav id="MainMenu">
        <ul>
          <li>
            <Link to="/" activeClassName="nav-item-selected">Inicio</Link>
          </li>
          <li>
            <Link to="/revistas" activeClassName="nav-item-selected" partiallyActive={true}>Revistas</Link>
          </li>
          <li>
            <Link to="/autores" activeClassName="nav-item-selected" partiallyActive={true}>Autores</Link>
          </li>
          <li>
            <Link to="/la-revista" activeClassName="nav-item-selected" partiallyActive={true}>La revista</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header

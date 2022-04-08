
import React, { useState } from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyles'

const Navbar = () => {
  const [isOopen,setIsOpen] = useState(false);
  return (
    <div>
      <Nav>
        <Logo onClick={() => setIsOpen(!isOopen)} to="/home">
          <i>{"<Clarusway/>"}</i>
          <span>recipe</span>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOopen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu mustafa={isOopen}>
          <MenuLink onClick={() => setIsOpen(!isOopen)} to="/about">About</MenuLink>
          <MenuLink to="/github">Github</MenuLink>
          <MenuLink onClick={() => setIsOpen(!isOopen)} to="/">Logout</MenuLink>
        </Menu>
      </Nav>
    </div>
  )
}

export default Navbar
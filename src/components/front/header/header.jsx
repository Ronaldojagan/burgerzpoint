import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../header/header.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from '../../../images/logo.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  } from 'reactstrap';

const Header = ({cartItems}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="gap"></div>
       <Navbar className="header" expand='md'>
          <div>
            <NavbarBrand><Link to='/'><img className='logo' src={Logo} alt='1'/></Link></NavbarBrand>
          </div>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="header-links" navbar>
                    <ul>
                      <li>
                        <a href='/'>Home</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href ='/about'>About</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href='/Shop'>Shop</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link to='/cart' >
                          <AiOutlineShoppingCart className='cartlogo' />
                          <span className='cart-length'>
                            {cartItems.length === 0 ? "" : cartItems.length}
                          </span>
                        </Link>
                      </li>
                    </ul>
                    
                  </Nav>
                </Collapse>
             </Navbar>
  </>     
  )
}

export default Header
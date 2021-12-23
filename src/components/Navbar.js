import React from 'react'
import { useState } from 'react'
import {Button} from 'react-bootstrap'
import LoginModal from './login'
import SignupModal from './signup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    return (
        <div>
            <nav className="navbar fixed-top navbar-dark bg-success text-light py-1">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faReact} size="lg" /> LOGO</a>
                <a className="link" href="#home">Home</a>
                <div className="dropdown">
                <button className="dropbtn">Shop</button>
                <div className="dropdown-content">
                    <a href="#">Product Categories</a>
                    <a href="#">Product Wishlist</a>
                    <a href="#">Cart</a>
                    <a href="#">My Account</a>
                </div>
                </div>
                <div className="dropdown">
                <button className="dropbtn">Products</button>
                <div className="dropdown-content">
                    <a href="#">Fruits</a>
                    <a href="#">Vegetables</a>
                    <a href="#">SeaFood</a>
                    <a href="#">Bakery</a>
                    <a href="#">Organic</a>
                </div>
                </div>
                <a className="link" href="#blogs">Blogs</a>
                <a className="link" href="#contact">Contact</a>
                <Button className='modalButton' variant='success' onClick={() => setSmShow(true)}>
                <FontAwesomeIcon icon={faUserCircle} size="lg" /> Login
                </Button>
                <Button variant='success' onClick={() => setLgShow(true)}>
                Sign up
                </Button>

                <LoginModal
                    show={smShow}
                    onHide={() => setSmShow(false)}
                />
                <SignupModal 
                   show={lgShow}
                   onHide={() => setLgShow(false)}
                />
                
            </div>       
            </nav>
        </div>
    )
}

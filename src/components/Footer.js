import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcPaypal,faCcMastercard,faCcVisa,faCcAmex,faCcDiscover,faCcAmazonPay } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div>
           <footer class="bg-light text-dark pt-5 pb-4">
            <div class="container text-center text-md-left">
                <div class="row text-center text-md-left">
                <div class="col-md-3 col-lg-3 col-xl-3 mt-3">
                    <h5 class="mb-4 font-weight-bold">LOGO</h5>
                    <p class="ms-5">Address: 60-49 Road 113 New York</p>
                    <p class="me-5">Phone: +65 11.188.888</p>
                    <p class="me-4">Email: hello@colorlib.com</p>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 class="mb-4 font-weight-bold">Useful Links</h5>
                    <ul style={{ listStyleType: 'none' }}>
                    <li><a href="#" class="text-dark me-5" style={{ textDecoration: 'none' }}>About Us</a></li>
                    <li><a href="#" class="text-dark me-5" style={{ textDecoration: 'none' }}>Our Services</a></li>
                    <li><a href="#" class="text-dark me-4" style={{ textDecoration: 'none' }}>Secure Shopping</a></li>
                    <li><a href="#" class="text-dark me-2" style={{ textDecoration: 'none' }}>Delivery Information</a></li>
                    <li><a href="#" class="text-dark me-5" style={{ textDecoration: 'none' }}>Privacy Policy</a></li>
                    <li><a href="#" class="text-dark me-5" style={{ textDecoration: 'none' }}>Our Sitemap</a></li>
                    </ul>
                    
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 me-1 mt-3">
                    <h5 class="mb-4 font-weight-bold">Join Our Newsletter Now</h5>
                    <p>Get E-mail updates about our latest shop and special offers.</p>
                    <form class="emailButton" style={{ margin:'auto', maxWidth:'300px' }}>
                    <input type='email' placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                    </form>
                </div>
                </div>

                <hr />
                <div class="row align-items-center">
                <div class="col-md-8 col-lg-8">
                    <p>Copyright © 2020 Grocery Store Demo All Right Reserved</p>
                </div>
                <div class="col-md-5 col-lg-4">
                    <div class="text-center text-md-right">
                    <ul class="list-unstyled list-inline">
                        <li class="list-inline-item">
                        <a href="#" class="text-dark" style={{ fontSize: '30px' }}>
                        <FontAwesomeIcon icon={faCcPaypal} /></a>
                        </li>
                        <li class="list-inline-item">
                        <a href="#" class="text-dark" style={{ fontSize: '30px' }}>
                        <FontAwesomeIcon icon={faCcMastercard} /></a>
                        </li>
                        <li class="list-inline-item">
                        <a href="#" class="text-dark" style={{ fontSize: '30px' }}>
                        <FontAwesomeIcon icon={faCcVisa} /></a>
                        </li>
                        <li class="list-inline-item">
                        <a href="#" class="text-dark" style={{ fontSize: '30px' }}>
                        <FontAwesomeIcon icon={faCcAmex} /></a>
                        </li>
                        <li class="list-inline-item">
                        <a href="#" class="text-dark" style={{ fontSize: '30px' }}>
                        <FontAwesomeIcon icon={faCcDiscover} /></a>
                        </li>
                        <li class="list-inline-item">
                        <a href="#" class="text-dark" style={{ fontSize: '30px' }}>
                        <FontAwesomeIcon icon={faCcAmazonPay} /></a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </footer> 
        </div>
    )
}

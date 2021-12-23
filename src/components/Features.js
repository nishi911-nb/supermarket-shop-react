import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane,faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { faLifeRing } from '@fortawesome/free-regular-svg-icons'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'

export default function Features() {
    return (
        <div>
            <div class="container">
            <div class="row my-5 py-5 text-center">
                <div class="col">
                <div class="card" style={{ width: '18rem', height: '15rem' }}>
                    <div class="card-body m-4">
                    <h5 class="card-title mb-4"><FontAwesomeIcon icon={faPlane} className='sticker' /></h5>
                    <h6 class="card-subtitle mb-3">FREE SHIPPING</h6>
                    <p class="card-text">Free shipping on all US order or order above $200</p>
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="card" style={{ width: '18rem', height: '15rem' }}>
                    <div class="card-body m-4">
                    <h5 class="card-title mb-4"><FontAwesomeIcon icon={faLifeRing} className='sticker' /></h5>
                    <h6 class="card-subtitle mb-3">SUPPORT 24/7</h6>
                    <p class="card-text">Contact us 24 hours a day, 7 days a week</p>
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="card" style={{ width: '18rem', height: '15rem' }}>
                    <div class="card-body m-4">
                    <h5 class="card-title mb-4"><FontAwesomeIcon icon={faExchangeAlt} className='sticker' /></h5>
                    <h6 class="card-subtitle mb-3">30 DAYS RETURN</h6>
                    <p class="card-text">Simply return it within 30 days for an exchange</p>
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="card" style={{ width: '18rem', height: '15rem' }}>
                    <div class="card-body m-4">
                    <h5 class="card-title mb-4"><FontAwesomeIcon icon={faPaypal} className='sticker' /></h5>
                    <h6 class="card-subtitle mb-3">SECURE PAYMENT</h6>
                    <p class="card-text">100% Secure Payment . We ensure secure payment with PEV</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

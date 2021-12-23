import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faComment } from '@fortawesome/free-regular-svg-icons'
import burger from './image/is-vegan-junk-food-healthy.jpg'
import alfredo from './image/alfredo.jpg'
import pasta from './image/pasta1.jpg'
import tips from './image/Child-eating-vegetable.jpg'
import caponata from './image/caponata.jfif'
import cabbage from './image/cabbage slaw.jpg'

export default function Blogs() {
    return (
        <div>
            <div class="container mt-5 pt-5 text-center ourblogs">
            <h1 style={{ fontSize: '60px' }}>From Our <span style={{ color: 'rgb(31, 99, 31)' }}>Blogs.....</span></h1>
            <div class="row row-cols-2 row-cols-lg-3 my-5">
                <div class="col">
                <div class="polaroid">
                    <img src={burger} alt="Burger" style={{ width: '100%' }} />
                    <div class="content">
                    <FontAwesomeIcon icon={faCalendar} style={{ color: 'rgb(156, 153, 153)' }} /> 
                    <span style={{ color: 'rgb(156, 153, 153)' }}> May 18, 2021 </span>
                    <FontAwesomeIcon icon={faComment} style={{ color: 'rgb(156, 153, 153)' }} />
                    <span style={{ color: 'rgb(156, 153, 153)' }}> 5 </span>  
                    <h1><b>The 10-Minute Window for the Perfect McDonald's Mash-Up</b></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo
                        , elementum in malesuada an darius ut augue.</p> 
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="polaroid">
                    <img src={alfredo} alt="alfredo" style={{ width: '100%' }} />
                    <div class="content">
                    <FontAwesomeIcon icon={faCalendar} style={{ color: 'rgb(156, 153, 153)' }} /> 
                    <span style={{ color: 'rgb(156, 153, 153)' }}> May 18, 2021 </span>
                    <FontAwesomeIcon icon={faComment} style={{ color: 'rgb(156, 153, 153)' }} />
                    <span style={{ color: 'rgb(156, 153, 153)' }}> 5 </span> 
                    <h1><b>5 Ingredients Pumpkin Alfredo</b></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo
                        , elementum in malesuada an darius ut augue.</p> 
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="polaroid">
                    <img src={pasta} alt="pasta" style={{ width: '100%' }} />
                    <div class="content">
                    <FontAwesomeIcon icon={faCalendar} style={{ color: 'rgb(156, 153, 153)' }} />
                    <span style={{ color: 'rgb(156, 153, 153)' }}> May 18, 2021 </span>
                    <FontAwesomeIcon icon={faComment} style={{ color: 'rgb(156, 153, 153)' }} />
                    <span style={{ color: 'rgb(156, 153, 153)' }}> 5 </span>
                    <h1><b>Creamy red pepper pasta with blistered tomatoes</b></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo
                        , elementum in malesuada an darius ut augue.</p> 
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="polaroid">
                    <img src={tips} alt="healthy food" style={{ width: '100%' }} />
                    <div class="content">
                    <FontAwesomeIcon icon={faCalendar} style={{ color: 'rgb(156, 153, 153)' }} />
                    <span style={{ color: 'rgb(156, 153, 153)' }}> May 18, 2021 </span>
                    <FontAwesomeIcon icon={faComment} style={{ color: 'rgb(156, 153, 153)' }} />
                    <span style={{ color: 'rgb(156, 153, 153)' }}> 5 </span> 
                    <h1><b>3 Steps to getting your kids to eat a healthy lunch</b></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo
                        , elementum in malesuada an darius ut augue.</p> 
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="polaroid">
                    <img src={caponata} alt="caponata" style={{ width: '100%' }} />
                    <div class="content">
                    <FontAwesomeIcon icon={faCalendar} style={{ color: 'rgb(156, 153, 153)' }} />
                    <span style={{ color: 'rgb(156, 153, 153)' }}> May 18, 2021 </span>
                    <FontAwesomeIcon icon={faComment} style={{ color: 'rgb(156, 153, 153)' }} />
                    <span style={{ color: 'rgb(156, 153, 153)' }}> 5 </span> 
                    <h1><b>Let's make homemade Caponata!</b></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo
                        , elementum in malesuada an darius ut augue.</p> 
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="polaroid">
                    <img src={cabbage} alt="cabbage slaw" style={{ width: '100%' }} />
                    <div class="content">
                    <FontAwesomeIcon icon={faCalendar} style={{ color: 'rgb(156, 153, 153)' }} />
                    <span style={{ color: 'rgb(156, 153, 153)' }}> May 18, 2021 </span>
                    <FontAwesomeIcon icon={faComment} style={{ color: 'rgb(156, 153, 153)' }} />
                    <span style={{ color: 'rgb(156, 153, 153)' }}> 5 </span> 
                    <h1><b>Quick Citrusy Cabbage Slaw (Mayo-free)</b></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo
                        , elementum in malesuada an darius ut augue.</p> 
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

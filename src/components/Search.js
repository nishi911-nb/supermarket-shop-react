import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faHeart,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
    return (
        <div>
            <ul class="nav nav-pills nav-fill m-5">
                <li class="nav-item">
                <div class="dropdown">
                    <button class=" nav-link active p-3 bg-success dropbtn"><FontAwesomeIcon icon={faBars} size="lg" /> Shop By Department</button>
                    <div class="dropdown-content">
                    <a href="#">Fruits</a>
                    <a href="#">Vegetables</a>
                    <a href="#">SeaFood</a>
                    <a href="#">Bakery</a>
                    <a href="#">Organic</a>
                    </div>
                </div>
                </li>
                <li class="nav-item search">
                    <form class="d-flex m-2">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </li>
                <li class="nav-item symbol">
                    <button class="btn btn-outline-success"><FontAwesomeIcon icon={faHeart} /></button>{' '}
                    <button class="btn btn-outline-success"><FontAwesomeIcon icon={faShoppingCart} /></button>
                </li>
            </ul>
        </div>
    )
}

import React from 'react'
import { useState } from 'react'
import fruits from './image/fruits.jpg'
import vegetables from './image/borsa_ortaggi-4a2b0236.jpeg'
import bakery from './image/donuts.jpg'

const grocery = { fruits,vegetables,bakery}

export default function NewArrivals() {
    const [selected, setSelected] = useState(grocery.fruits)

    return (
        <div>
            <div class="container arrivals mb-5">
            <h1 style={{ fontSize: '60px'}}>New <span style={{ color: 'rgb(31, 99, 31)' }}>Arrivals.....</span></h1>
            <p>We’ve recently updated our entire product<br />
                when an unknownshil printer took a galley of type and scrambled it to make a type</p>

            <button type="button" class="btn btn-outline-success m-3" onClick={() => setSelected(grocery.fruits)}>Fruits</button>
            <button type="button" class="btn btn-outline-success m-3" onClick={() => setSelected(grocery.vegetables)}>Vegetables</button>
            <button type="button" class="btn btn-outline-success m-3" onClick={() => setSelected(grocery.bakery)}>Bakery</button>
            <button type="button" class="btn btn-outline-success m-3">SeaFood</button>
            <button type="button" class="btn btn-outline-success m-3">Organic</button>
            <img src={selected} style={{ width: '70%' }} alt='grocery' />
            </div>
        </div>
    )
}

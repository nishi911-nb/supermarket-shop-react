import React from 'react'
import donuts from './image/donuts.jpg'
import fruits from './image/fruits.jpg'
import seafood from './image/alimentos-que-ajudam-a-controlar-o-acido-urico-no-sangue.jpg'

export default function Category() {
    return (
        <div>
            <div class="container category">
            <h1>Shop By<span style={{ color: 'rgb(31, 99, 31)' }}> Category.....</span></h1>
            <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s,<br />
                when an unknownshil printer took a galley of type and scrambled it to make a type</p>
            <div class="row my-2 py-5">
                <div class="col">
                <div class="polaroid">
                    <img src={ donuts } alt="Donuts" style={{ width: '100%' }} />
                    <div class="content">
                    <p>Bakery</p>
                    <a href="#" class="btn btn-outline-success">Shop</a>
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="polaroid">
                    <img src={ fruits } alt="Fruits" style={{ width: '100%' }} />
                    <div class="content">
                    <p>Fruits</p>
                    <a href="#" class="btn btn-outline-success">Shop</a>
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="polaroid">
                    <img src={ seafood } alt="SeaFood" style={{ width: '100%' }} />
                    <div class="content">
                    <p>SeaFood</p>
                    <a href="#" class="btn btn-outline-success">Shop</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

import React from 'react'
import image from './image/vegetable.jpg'
export default function Sale() {
    return (
        <div>
            <div class="imageContent">
            <img src={image} alt="image" width="100%" height="550" />
            <div class="center">
                <h1>Sale 50% OFF</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis risus leo, elementum in malesuada an darius ut augue.
                Cras sit amet lectuset justo feugiat euismod sed non erat. Nulla non felis id metus bibendum iaculis</p>
                <button type="button" class="btn btn-success button">Shop Now</button> 
            </div>
            </div>
        </div>
    )
}

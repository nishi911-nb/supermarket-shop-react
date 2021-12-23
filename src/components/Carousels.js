import {Carousel} from 'react-bootstrap'
import grocery1 from './image/woman-grocery-shopping-iStock-1141343601.jpg'
import grocery2 from './image/borsa_ortaggi-4a2b0236.jpeg'

const Carousels = () => {
    return (
        <Carousel>
            <Carousel.Item className='my-2'>
                <img className="d-block image" src={grocery1} alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item className='my-2'>
                <img className="d-block image" src={grocery2} alt="Second slide"/>
            </Carousel.Item>
        </Carousel>
    );
}
 
export default Carousels;


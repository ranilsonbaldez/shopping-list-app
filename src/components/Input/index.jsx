import './Input.css';
import Button from '../Button';
import { useState } from 'react';
import Products from '../Products';

export default function Input () {
    const [item, setItem] = useState("");
    const [products, setProducts] = useState([]);


    function handleChange(event) {
        setItem(event.target.value);
    }

    function handleClick() {
        setProducts([...products, item]);
        setItem("");
    }

    return (
        <>
            <div className='input-product'>
                <input
                className='text-input'
                onChange={event => handleChange(event)}
                type="text"
                value={item}
                maxLength={30}
                placeholder='Digite o item'
                />

                <Button onClick={handleClick}>+</Button>
            </div>

            <Products products={products}/>
        </>
    )
}
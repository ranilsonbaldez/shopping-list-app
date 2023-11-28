import './Products.css';
import './Products-mobile.css';
import { FaTrashAlt } from "react-icons/fa";
import React, { useState } from 'react';

export default function Products ({ products }) {

    const [checkedItems, setCheckedItems] = useState(Array(products.length).fill(false));

    const handleCheckboxChange = (index) => {
        setCheckedItems((prevCheckedItems) =>
          prevCheckedItems.map((item, i) => (i === index ? !item : item))
        );
      };

    return (
        <div className='container'>
            <div
            className='menu'
            type="none">
                <div className='index'></div>
                <div className='check'></div>
                <div className='product'><p>Produto</p></div>
                <div className='price'>Preço</div>
                <div className='quantity'>Qtd</div>
                <div></div>
            </div>

            <ul
            className='list' type="none">
                {products.map((product, index) => (
                    <li className='products-list' key={index}>
                        <div className='index'><p>{index + 1}</p></div>
                        <div className='check'>
                            <input
                            type='checkbox'
                            checked={checkedItems[index]}
                            onChange={() => handleCheckboxChange(index)}
                            />
                        </div>
                        <div className='product'>
                        <p style={{ textDecoration: checkedItems[index] ? 'line-through' : 'none' }}>
                            {product}
                        </p>
                        </div>
                        <div className='price'>
                            <input
                                type='text'
                                placeholder='Valor'
                            />
                        </div>
                        <div className='quantity'><select>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select></div>
                        <div className='delete'><p><FaTrashAlt /></p></div>
                    </li>
                ))}
            </ul>

        </div>
    )
}
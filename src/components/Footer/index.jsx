import './Footer.css';
import { useState } from 'react';

export default function Footer() {
    const [ counter, setCounter ] = useState(0);

    function contador () {
        setCounter(counter + 1);
    }

    return(
        <>
            <footer className='footer-style'>
            <button className='btn btn-danger' onClick={contador}>COUNTER</button>
            <p>{ counter }</p>
            </footer>
        </>
    )
}
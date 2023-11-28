import './Button.css';
import PropTypes from 'prop-types';

export default function Button ({onClick, children}) {
    return (
        <button className='btn-input' onClick={onClick}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
}
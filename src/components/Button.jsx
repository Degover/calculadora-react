import React from 'react'
import './Button.css'

const Button = props => {
    let className = 'button'
    if(props.operation)
        className += ' operation';
    if(props.double)
        className += ' double';
    if(props.triple)
        className += ' triple';

    const onClick = e => props.click && props.click(props.label);
    return (
        <button className={className} onClick={onClick}>
            {props.label}
        </button>
    )
}

export default Button;
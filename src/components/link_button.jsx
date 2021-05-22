import React from 'react';
import classlist from '../js/classlist';

const class_outlined = 'px-4 py-2 transition duration-300 text-brand_primary hover:text-white hover:bg-brand_primary focus:text-white focus:bg-brand_primary focus:outline-none rounded border-2 border-brand_primary'
const class_outlined_dark = 'px-4 py-2 transition duration-300 text-typography_primary hover:text-white hover:bg-typography_primary focus:text-white focus:bg-typography_primary focus:outline-none rounded border-2 border-typography_primary'

function LinkButton (props) {
    let className = ''
    switch (props.type) {
        case 'outlined':
            className = class_outlined
        break;
        case 'outlined-dark':
            className = class_outlined_dark
        break;
        default:
            className = class_outlined
    }

    return (
    <a href={props.href} target={props.target || '_self'} aria-label={props.aria_label || ''} className={classlist([
        className,
        props.className
        ])}>
        {props.text}
    </a>
    )
}

export default LinkButton; 
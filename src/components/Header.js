import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
<div className="header-wrapper" id='header'>
        <div className="main-info">
            <h1>Hi! I'm Amanda.</h1>
            <p>I really like... &nbsp;
            <Typed 
                className='typed-text'
                strings={['web design.', 'debugging.', 'web development.', 'puzzle solving.', 'comic relief.']}
                typeSpeed={40}
                backSpeed={60}
                loop
            /></p>
            <a href='#contact' className='btn-main-offer'>Contact Me</a>
        </div>
</div>
    )
}

export default Header

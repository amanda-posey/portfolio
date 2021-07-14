import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
    return (
        <div className='contact'>
            <h1 className="py-5" id='contact'>Contact Me</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className='icon' icon={faLinkedin} size='2x'/></div>
                                <a className='link' href='https://www.linkedin.com/in/amanda-posey-software-engineer/'>LinkedIn</a>
                                <p>Let's connect soon!</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className='icon' icon={faGithub} size='2x'/></div>
                                <a className='link' href='https://github.com/amanda-posey'>GitHub</a>
                                <p>Have a look at my past work.</p>
                            </div>
                        </div>
                    </div>
                </div> 
        </div>
    )
}

export default Contact;

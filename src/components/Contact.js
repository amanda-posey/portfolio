import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
    return (
        <div className='contact'>
            <h1 className="py-5" id='contact'>Contact Me</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <a href='https://www.linkedin.com/in/amanda-posey-software-engineer/'>
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className='icon' icon={faLinkedin} size='2x'/></div>
                                <h2>LinkedIn</h2>
                                <p>Let's connect soon!</p>
                            </div>
                            </a>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <a href='https://github.com/amanda-posey'>
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className='icon' icon={faGithub} size='2x'/></div>
                                <h2>GitHub</h2>
                                <p>Have a look at my past projects.</p>
                            </div>
                            </a>
                        </div>
                    </div>
                </div> 
        </div>
    )
}

export default Contact;

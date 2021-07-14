import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faFileCode, faTools } from '@fortawesome/free-solid-svg-icons';

function Skills() {
    return (
        <div className='services'>
            <h1 className="py-5" id='skills'>Skills</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className='icon' icon={faDesktop} size='2x'/></div>
                                <h2>Front-End</h2>
                                <p>HTML | CSS | Javascript | Responsive Design | Bootstrap | Material-UI | React</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className='icon' icon={faFileCode} size='2x'/></div>
                                <h2>Back-End</h2>
                                <p>NodeJS | Express | SQL | MongoDB | AJAX | RESTful Programming | Python | Django</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className='icon' icon={faTools} size='2x'/></div>
                                <h2>Tools</h2>
                                <p>Github | Slack | Zoom | Object-Oriented Programming | LucidChart</p>
                            </div>
                        </div>
                    </div>
                </div> 
        </div>
    )
}

export default Skills;

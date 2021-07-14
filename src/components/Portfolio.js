import React from 'react';
import wandering from '../images/wandering.png';
import healthful from '../images/healthful.png';

function Portfolio() {
    return (
        <div className='portfolio-wrapper'>
            <div className="container">
                <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
                    <div className='image-box-wrapper row justify-content-wrapper'>
                        <img className='portfolio-image' src={wandering} alt='WanderingWV' />
                    </div>
                    {/* - */}
                    <div className='image-box-wrapper row justify-content-wrapper'>
                        <img className='portfolio-image' src={healthful} alt='The Healthful Pantry' />
                    </div>
            </div>
        </div>
    )
}

export default Portfolio

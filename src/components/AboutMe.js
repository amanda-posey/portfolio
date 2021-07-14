import React from 'react';
import author from '../avatar.png';

function AboutMe() {
    return (
        <div className='container py-5' id='about'>
            <div className="row">
                <div className='col-lg-6 col-xm-12'>
                    <div className="photo-wrap mb-5">
                        <img className='profile-img' src={author} alt='author' />
                    </div>
                </div>
                    <div className='col-lg-6 col-xm-12'>
                        <h1 className='about-heading'>About Me</h1>
                        <p>
                        Full stack software engineer with a background in radio production and a passion for debugging and problem-solving. Both my history in radio and my time at General Assembly have instilled a deep understanding of project planning and the pacing required to meet deadlines. Whether in the production booth, behind my keyboard, or spending time with my family, I always strive to keep quality and authenticity at the forefront. 
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default AboutMe

import React from 'react';
import wandering from '../images/wandering.png';
import healthful from '../images/healthful.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer} from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";

function Portfolio() {
    const openPopupboxWV = () => {
        const content = (
        <>
        <img className='portfolio-image-popupbox' src={wandering} alt='WanderingWV' />
        <p>This is the capstone project for my software engineering immersive at General Assembly. It's built with Python and Django.</p>
        <b>See it in action:</b> <a className='link' onClick={() => window.open('https://wanderingwv.herokuapp.com/')}>https://wanderingwv.herokuapp.com/</a>
        </>)
        PopupboxManager.open({content})
    }
    const popupboxConfigWV = {
        titleBar: {
            enable: true,
            text: 'Wandering WV'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    const openPopupboxHP = () => {
        const content = (
        <>
        <img className='portfolio-image-popupbox' src={healthful} alt='Healthful Pantry' />
        <p>This was a group project I was proud to be a part of. I worked to implement the API as part of the back-end team.</p>
        <b>See it in action:</b> <a className='link' onClick={() => window.open('https://thehealthfulpantry.herokuapp.com/')}>https://thehealthfulpantry.herokuapp.com/</a>
        </>)
        PopupboxManager.open({content})
    }
    const popupboxConfigHP = {
        titleBar: {
            enable: true,
            text: 'The Healthful Pantry'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    return (
        <div className='portfolio-wrapper' id='portfolio'>
            <div className="container">
                <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
                    <div className='image-box-wrapper row justify-content-center'>
                        <div className='portfolio-image-box' onClick={openPopupboxWV}>
                            <img className='portfolio-image' src={wandering} alt='WanderingWV' />
                                <div className="overflow"></div>
                                <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                        </div>
                    {/* - */}
                        <div className='portfolio-image-box' onClick={openPopupboxHP}>
                            <img className='portfolio-image' src={healthful} alt='The Healthful Pantry' />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                        </div>
                    </div>
            </div>
            <PopupboxContainer {...popupboxConfigHP}/>
        </div>
    )
}

export default Portfolio

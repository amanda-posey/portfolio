import React from 'react';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon, LinkedinShareButton, LinkedinIcon} from 'react-share';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Adrian, WV, USA</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:304-815-3170">+1 (304) 805-3170</a>
                        </div>
                        <div className="d-flex">
                            <p>amanda.posey@live.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className='footer-nav'>Home</a>
                                <br />
                                <a className='footer-nav'>About</a>
                                <br />
                                <a className='footer-nav'>Skills</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm 6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={'http://www.amandaposey.com'} 
                                quote={'Full Stack Developer'} 
                                hashtag='#javascript'>
                            <FacebookIcon className='mx-3' size={36} />
                            </FacebookShareButton>

                            <TwitterShareButton
                                url={'http://www.amandaposey.com'} 
                                quote={'Full Stack Developer'} 
                                hashtag='#javascript'>
                            <TwitterIcon className='mx-3' size={36} />
                            </TwitterShareButton>

                            <LinkedinShareButton
                                url={'http://www.amandaposey.com'} 
                                quote={'Full Stack Developer'} 
                                hashtag='#javascript'>
                            <LinkedinIcon className='mx-3' size={36} />
                            </LinkedinShareButton>

                            <RedditShareButton
                                url={'http://www.amandaposey.com'} 
                                quote={'Full Stack Developer'} 
                                hashtag='#javascript'>
                            <RedditIcon className='mx-3' size={36} />
                            </RedditShareButton>
                        </div>
                        <div className="pt-3 text-center">
                            Copyright &copy;
                            {new Date().getFullYear()}&nbsp; Amanda Posey | All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

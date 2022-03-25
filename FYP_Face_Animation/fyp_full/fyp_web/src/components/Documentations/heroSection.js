import React from 'react';
import { Button } from './Button';
import '../../App.css';
import './heroSection.css';
import Proposal from './Proposal';
import Requirement from './Requirement';
import Design from './Design';

function heroSection() {
    return (
        <div className='hero-container'>
            <video src='../img/bg_vid.mp4' autoPlay loop muted />
            <h1>FaceMover Pte Ltd</h1>
            <p>Animating the image of your choice</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>HOW IT WORKS</Button>
            </div>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClickl={console.log('test')}>WATCH PRODUCT DEMO <i className='far fa-play-circle' /></Button>
            </div>
            <div className='hero-btns'>
                <Proposal />
            </div>
            <div className='hero-btns'>
                <Requirement />
            </div>
            <div className='hero-btns'>
                <Design />
            </div>
        </div>
    );
}

export default heroSection;

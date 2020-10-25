
import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
      <div className='hero-container'>
        <video src='/videos/portfolio-background.mp4' autoPlay loop muted />
        <h1>Hi, I'm Alejandra.</h1>
        <p>Full-Stack Software Engineer</p>
        <img className="img-fluid col-md-10 rounded-circle" src="https://i.imgur.com/dDYtvDa.png" alt="alejandra image" id="profile-pic"></img>
        <div className='hero-btns'>
        <Link to='/portfolio'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            
          >
            Check Out My Work
          </Button>
        </Link>
        </div>
    </div>
  );
}

export default HeroSection;
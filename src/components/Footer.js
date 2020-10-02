import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
   
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              AP
            </Link>
          </div>
          <small class='website-rights'>AP © 2020</small>
          <div class='social-icons'>
            <a
              class='social-icon-link twitter'
              href='https://github.com/patinoale'
              target='_blank'
              aria-label='Twitter'
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.linkedin.com/in/patinoalejandra/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
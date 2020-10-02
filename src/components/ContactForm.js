import React from 'react';
import './ContactForm.css';

function ContactForm() {
    return (
<div className="wrap-contact100">
        <form className="contact100-form validate-form" action="https://getform.io/f/974b657c-8ecb-4e4c-acf9-1bbd6fb8b16d" method="POST">
          <h2>Send me a message</h2>
          <div className="wrap-input100 validate-input">
            <input
              className="input100"
              type="text"
              placeholder="Enter name"
              required="required"
              name="name"
            />
          </div>
          <div className="wrap-input100 validate-input">
            <input
              className="input100"
              type="email"
              placeholder="Enter your email"
              required="required"
              name="name"
            />
          </div>
          <div className="wrap-input100 validate-input">
            <input
              type="text"
              className="input100"
              placeholder="Enter your message"
              required="required"
              name="message"
            />
          </div>
          <div className="container-contact100-form-btn">
            <button type="submit" className="contact100-form-btn">
              Send
            </button>
          </div>
        </form>
      </div>
    );
}

export default ContactForm;
    
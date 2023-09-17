import React from 'react'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import MapIcon from '@mui/icons-material/Map';
import EmailIcon from '@mui/icons-material/Email';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <section id="contactme">
      <div className="contactMe__wrapper">
        <div className="contact__me__parent">
          <div className="contact__me__top">
            <h3>Contact</h3>
            <div className="contact__me__icon">
              <h2>Don't be shy! Contact Me!</h2> <ConnectWithoutContactIcon />
            </div>
          </div>
          <div className="contact__me__bottom">
            <div className="contact__location">
              <MapIcon />
              <div className="contact__location__city">
                <h3>Location</h3>
                <p>Hayward, CA</p>
              </div>
            </div>
            <div className="contact__email">
              <EmailIcon />
              <div className="contact__email__info">
                <h3>Email</h3>
                <p>cruzortegaoctavio@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMe
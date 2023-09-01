import React from 'react'

import './footer.css';

const Footer = () => {
  return (
    <section className="footer">
        <div className="footer__content">
            <div className="footer__content-icons">
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-discord"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>

            <div className="footer__content-text">
                <p>Privacy</p>
                <p>Terms of Use</p>
            </div>
        </div>
    </section>
  )
}

export default Footer
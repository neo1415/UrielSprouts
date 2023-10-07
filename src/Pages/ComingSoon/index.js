import React from 'react';
import './coming.scss';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ComingSoon = () => {
  return (
    <div>
      <div className="containerina">
        <div className="wrapper">
          <div className="Content">
            <h1>We're Coming Soon</h1>
            <p>
              This service will be available soon.
              </p>
              <p>
              Stay tuned for more information by following us on social media.
            </p>
            {/* <a href="#" className="btn1">
              Subscribe
            </a> */}
            <Link to="/" className="btn2">
              Back to Home
            </Link>

            <div className="social-media-icons">
        <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.linkedin.com/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
      </div>
          </div>
          {/* content ends */}
        </div>
        {/* wrapper ends */}
      </div>
      {/* Social Media Icons */}

    </div>
  );
};

export default ComingSoon;

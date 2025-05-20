import React, { useState, useEffect } from 'react';
import './SocialToggle.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { LuMessageSquarePlus } from "react-icons/lu";
import { BiMessageMinus } from "react-icons/bi";

const SocialToggle: React.FC = () => {
  // State to manage whether the social links are shown or hidden
  const [isOpen, setIsOpen] = useState(false);

  // State to control visibility based on scroll position
  const [isVisible, setIsVisible] = useState(false);

  // Add scroll listener to show the toggle button after scrolling 500px
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false); // Close links when button is hidden
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Wrapper for the toggle component with visibility control
    <div className={`social-toggle-wrapper ${isVisible ? 'social-toggle-show' : ''}`}>

      {/* Social media links container, shown only when isOpen is true */}
      <div className={`social-links ${isOpen ? 'show' : ''}`}>
        <a href="https://facebook.com" className="link facebook">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" className="link instagram">
          <FaInstagram />
        </a>
        <a href="https://wa.me/+9647716091119" className="link whatsapp">
          <FaWhatsapp />
        </a>
      </div>

      {/* Toggle button to open/close social links */}
      <button className="main-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <BiMessageMinus /> : <LuMessageSquarePlus />}
      </button>
    </div>
  );
};

export default SocialToggle;

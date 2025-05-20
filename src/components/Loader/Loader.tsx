import React from 'react';
import './Loader.css';

const Loader: React.FC = () => {
  return (
    <div className="loader-wrapper">
      <img src="/flora/Images/Navbar/Logo.png" alt="" />

      <div className="loader"></div>
    </div>
  );
};

export default Loader;
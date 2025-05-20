import type { LinkItem } from "../../types/Link";
import './navBarComponent.css';
import { useState, useEffect } from 'react';

// Props type for NavBarComponent
interface NavBarComponentProps {
  data: LinkItem[]; // Array of navigation links
}

const NavBarComponent: React.FC<NavBarComponentProps> = ({ data }) => {
  // State to toggle mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // State to track the active navigation link
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // State to track if the user has scrolled down
  const [scrolling, setScrolling] = useState(false);

  // Scroll event listener to add styling when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); // Activate when scroll is more than 50px
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navBar px-150 ${scrolling ? "scrolled" : ""} ${isOpen ? 'whiteBackground openMenu' : ''}`}>
      
      {/* Site Logo */}
      <img src="/flora/Images/Navbar/Logo.png" alt="Site Logo" className="navLogo" />

      {/* Navigation links container */}
      <ul className={`navLinks ${isOpen ? "responsiveNav" : ""}`}>
        {data?.map((item, index) => (
          <li key={index} className={`navItem ${activeIndex === index ? "active" : ""}`}>
            <a
              className="navLink fs-20"
              href={item.path}
              onClick={() => {
                setActiveIndex(index); // Set current active link
                setIsOpen(false);      // Close mobile menu on click
              }}
            >
              {item.name}
            </a>
          </li>
        ))}

        {/* Mobile view login button (appears inside menu) */}
        <li className="mobileLoginWrapper">
          <button className="loginButtonMobile fs-20">Login</button>
        </li>
      </ul>

      {/* Desktop view login button (visible outside menu) */}
      <button className="loginButton fs-20">Login</button>

      {/* Mobile menu toggle button (hamburger / close icon) */}
      <button className="toggleButton" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={
            isOpen
              ? "/flora/Images/Navbar/close.svg" // Show close icon when menu is open
              : "/flora/Images/Navbar/Bars.svg"  // Show hamburger icon when menu is closed
          }
          alt="Menu Toggle"
        />
      </button>
    </nav>
  );
};

export default NavBarComponent;

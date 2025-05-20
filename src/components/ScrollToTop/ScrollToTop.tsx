import React, { useState, useEffect } from "react";
import "./ScrollToTop.css";
import { IoMdArrowUp } from "react-icons/io";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Scroll handler
  const handleScroll = (): void => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`MR-scroll-to-top ${isVisible ? "MR-Scroll-show" : ""}`}
    >
      <IoMdArrowUp className="MR-ScrollArrow" />
    </button>
  );
};

export default ScrollToTop;

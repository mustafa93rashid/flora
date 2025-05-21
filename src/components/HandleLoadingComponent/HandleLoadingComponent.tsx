import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HandleLoadingComponent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleLoad = (): void => {
      setTimeout(() => {
        setLoading(false);    

        AOS.init({
          once: true,
          duration: 1000, 
        });
        AOS.refresh();
      }, 2700);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {loading ? <Loader /> : <div>{children}</div>}
    </>
  );
};

export default HandleLoadingComponent;

import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HandleLoadingComponent: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleLoad = (): void => {
      setTimeout(() => {
        AOS.init({
          once: true,
          duration: 3000,
        });
        AOS.refresh();
        setLoading(false);
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
      {loading ? <Loader /> : <div></div>}
    </>
  );
};

export default HandleLoadingComponent;

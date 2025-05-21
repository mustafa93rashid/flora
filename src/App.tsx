import './App.css'
import Home from './pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Cursor from "./components/Cursor/Cursor";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import HandleLoadingComponent from "./components/HandleLoadingComponent/HandleLoadingComponent"
import SocialToggle from "./components/SocialToggle/SocialToggle"
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <ScrollToTop />
      <SocialToggle />
      <Cursor />
      <WelcomeMessage />
      <HandleLoadingComponent>
        <Home />
      </HandleLoadingComponent>

    </>
  )
}

export default App

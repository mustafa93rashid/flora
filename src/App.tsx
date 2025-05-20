import './App.css'
import Home from './pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
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
          <WelcomeMessage />

      <Home />
    </>
  )
}

export default App

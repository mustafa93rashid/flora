import { useEffect, useState } from 'react';
import './WelcomeMessage.css';

const WelcomeMessage: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const hour: number = new Date().getHours();
    let msg: string = '';

    if (hour >= 5 && hour < 12) {
      msg = '🌅 Good morning! Wishing you a great day.';
    } else if (hour >= 12 && hour < 17) {
      msg = '☀️ Good afternoon! Glad to have you here.';
    } else if (hour >= 17 && hour < 21) {
      msg = '🌇 Good evening! How can we help you today?';
    } else {
      msg = '🌙 Good night! Feel free to explore our website.';
    }

    setMessage(msg);
    setVisible(true);

    const timer = setTimeout(() => setVisible(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`welcome-message ${visible ? 'visible' : 'hidden'}`} >
      {message}
    </div>
  );
};

export default WelcomeMessage;

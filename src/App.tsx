import './App.css';
import Header from './components/Header';
import Words from './components/Words';
import Keyboard from './components/Keyboard';
import Timer from './components/Timer';
import { useEffect, useState } from 'react';

function App() {
  const [startTimer, setStartTimer] = useState(false);

  // Function to check if the key pressed is valid for a typing test
  const isValidKey = (key: string) => {
    const validRegex = /^[a-zA-Z0-9.,!?'"@#$%^&*()_+={}:;<>/\\[\]\-`~ ]$/; // Alphanumeric and common punctuation
    return validRegex.test(key);
  };

  // Trigger the timer when a valid key is pressed
  const handleKeyPress = (event: KeyboardEvent) => {
    if (isValidKey(event.key)) {
      setStartTimer(true);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4">
        <Header />
      </header>

      <main className="flex flex-col flex-grow p-4">
        <div className="flex-grow-[7]">
          <Timer triggerStart={startTimer} />
          <Words />
        </div>

        <div className="flex-grow-[3]">
          <Keyboard />
        </div>
      </main>

      {/* Keyboard section */}
      <footer className="p-4 text-center">made with heart by Jehu</footer>
    </div>
  );
}

export default App;

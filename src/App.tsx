import './App.css';
import Header from './components/Header';
import Words from './components/Words';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header section */}
      <header className="p-4">
        <Header />
      </header>

      {/* Words section grows to take available space */}
      <main className="flex flex-col flex-grow p-4">
        {/* Words Section (60% height of main) */}
        <div className="flex-grow-[6]">
          <Words />
        </div>

        {/* Keyboard Section (40% height of main) */}
        <div className="flex-grow-[4]">
          <Keyboard />
        </div>
      </main>

      {/* Keyboard section */}
      <footer className="p-4 text-center">made with heart by Jehu</footer>
    </div>
  );
}

export default App;

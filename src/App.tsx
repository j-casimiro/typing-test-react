import './App.css';
import Header from './components/Header';
import Words from './components/Words';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4">
        <Header />
      </header>

      <main className="flex flex-col flex-grow p-4">
        <div className="flex-grow-[7]">
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

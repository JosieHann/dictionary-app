import './App.css';
import Dictionary from "./Dictionary";
import axios from "axios";
function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
      </header>
      <main>
        <Dictionary />
      </main>
    <footer className='App-footer'> <small>Coded by Josie Hann</small></footer>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Dictionary from "./Dictionary";




function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
      </header>
      <main>
      <Dictionary defaultKeyword="spooky" />
      </main>
    <footer className='App-footer'> <small>Coded by <a href='https://sitesiren-josie-portfolio.netlify.app/'> Josie Hann</a> Hosted on <a href='https://extraordinary-pixie-e7bb51.netlify.app/'>Netlify</a> and open-sourced on <a href='https://github.com/JosieHann/dictionary-app'>Github</a></small></footer>
      </div>
    </div>
  );
}

export default App;

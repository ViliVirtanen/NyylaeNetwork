import './App.css';
import { useState } from 'react'
import Ilmosivu from './components/Ilmosivu';
import Ilmottautuneet from './components/Ilmottautuneet';
import Kommentit from './components/Kommentit';
function App() {
  const [page, setPage] = useState(0)

  const getPage = () => {
    if (page === 0) {
      return <Ilmosivu/>
    } else if (page === 1) {
      return <Ilmottautuneet/>
    } else {
      return <Kommentit/>
    }
  }

  return (
    <div className="App">
      <header className='header'>
        <h1 className='nyyla'>NYYLÄ NETWORK</h1>
        <nav className='nav-bar'>
          <button onClick={() => setPage(0)}>ilmosivu</button>
          <button onClick={() => setPage(1)}>ilmottautuneet</button>
          <button onClick={() => setPage(2)}>kommentit</button>
        </nav>
      </header>
      <div>{getPage()}</div>
    </div>
  );
}

export default App;

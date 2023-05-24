import logo from './logo.svg';
import './App.css';
import minimax from './utils/minimax';

function App() {
  const board = [
        ['X', 'O', ''],
        ['', 'O', ''],
        ['', '', 'X']
      ];
      const player = 'X';
      const result = minimax(board, player);
      console.log('Best move:', result.move);
      console.log('Board score:', result.score);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;

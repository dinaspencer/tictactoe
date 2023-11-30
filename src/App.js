import './App.css';
import { useState } from 'react';
import Header from './Header';
import Board from './Board';

const PLAYERX = "Player 1 - X's";
const PLAYERO = "Player 2 - O's";

function App() {

  const [turn, setTurn] = useState(PLAYERX);
  const [values, setValues] = useState([
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ]);

  return (
    <div className="App">
     <h1>Tic Tac Toe</h1>
    <Header turn={turn} />
    <Board values={values} />
    </div>
  );
}

export default App;

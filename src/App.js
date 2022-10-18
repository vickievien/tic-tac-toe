import './App.css';
import { useState } from 'react';
import NewGameMenuComponent from './components/newGame/newGameMenuComponent';
import GameComponent from './components/game/gameComponent';
function App() {
  const [newGameModal, setNewGameModal] = useState(true);
  const toggleNewGameModal = () => {
      setNewGameModal(!newGameModal);
  }
  return (
    <>
      {
      newGameModal
      ?
      <NewGameMenuComponent toggleNewGameModal={toggleNewGameModal}/>
      :
      <GameComponent setNewGameModal={setNewGameModal}/>
      }
    </>
    );
}
export default App;
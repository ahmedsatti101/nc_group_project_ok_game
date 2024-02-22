import io from 'socket.io-client';
import Select from './Select.jsx';
import { useState, useEffect } from 'react';

const GameSettings = ({
  gameSettingsSubmitted,
  setGameSettingsSubmitted,
  socket,
}) => {
  const [boardSize, setboardSize] = useState(17);
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
  const [numberOfBlocksInGame, setnumberOfBlocksInGame] = useState(10);
  const [playerOneColor, setPlayerOneColor] = useState('red');

  const [serverResponse, setServerResponce] = useState(null); // to proces server responce in future
  /* useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log(data.message);
      setServerResponce(data.message);
    });
  }, [socket]); //TO DO specify which soket to send data*/

  const sendData = (data) => {
    socket.emit('send_message', { data });
  };
  function handleUserGameSettingsSubmit(event) {
    if (gameSettingsSubmitted) {
      event.preventDefault();
      setGameSettingsSubmitted(false);
    } else {
      event.preventDefault();
      const gameSettings = {};
      gameSettings.boardSize = boardSize;
      gameSettings.numberOfPlayers = numberOfPlayers;
      gameSettings.numberOfBlocksInGame = numberOfBlocksInGame;
      gameSettings.playerOneColor = playerOneColor;
      sendData(gameSettings);
      setGameSettingsSubmitted(true);
    }
  }

  return (
    <>
      <h1>Chose your settings to create a new game</h1>
      <form onSubmit={handleUserGameSettingsSubmit}>
        <Select
          label="Choose number of players?"
          options={[
            { label: 'two players', value: 2 },
            { label: 'three players', value: 3 },
            { label: 'four players', value: 4 },
          ]}
          value={numberOfPlayers}
          disabled={gameSettingsSubmitted}
          onChange={(event) => {
            setNumberOfPlayers(event.target.value);
          }}
        />
        <Select
          label="Chose board size"
          options={[
            { label: '10X10', value: 10 },
            { label: '15X15', value: 15 },
            { label: '17X17', value: 17 },
            { label: '20X20', value: 20 },
            { label: '25X25', value: 25 },
          ]}
          value={boardSize}
          disabled={gameSettingsSubmitted}
          onChange={(event) => {
            setboardSize(event.target.value);
          }}
        />
        <Select
          label="Chose number of blocks avaliable for player"
          options={[
            { label: '10', value: 10 },
            { label: '15', value: 15 },
            { label: '20', value: 20 },
          ]}
          value={numberOfBlocksInGame}
          disabled={gameSettingsSubmitted}
          onChange={(event) => {
            setnumberOfBlocksInGame(event.target.value);
          }}
        />
        <Select
          label="Chose your color"
          options={[
            { label: 'red', value: 'red' },
            { label: 'blue', value: 'blue' },
            { label: 'orange', value: 'orange' },
            { label: 'green', value: 'green' },
          ]}
          value={playerOneColor}
          disabled={gameSettingsSubmitted}
          onChange={(event) => {
            setPlayerOneColor(event.target.value);
          }}
        />

        <button type="submit">
          {!gameSettingsSubmitted ? 'Submit' : 'Change Settings'}
        </button>
      </form>
    </>
  );
};

export default GameSettings;
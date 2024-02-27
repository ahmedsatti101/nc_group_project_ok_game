const GameSettings = ({ gameSettings, setGameSettings }) => {
  return (
    <>
      <h2>Chose your settings to create a new game</h2>
      <div className="setting-line">
        <div className="settings-first-row">
          <div className="chose-number-of-players">
            <h4>Number of players</h4>
            <button
              className="global-btn setting-button"
              disabled={gameSettings.numberOfPlayers === 2 ? true : false}
              onClick={() => {
                setGameSettings({
                  ...gameSettings,
                  numberOfPlayers: 2,
                });
              }}
            >
              2
            </button>
            <button
              className="global-btn setting-button"
              disabled={gameSettings.numberOfPlayers === 3 ? true : false}
              onClick={() => {
                setGameSettings({
                  ...gameSettings,
                  numberOfPlayers: 3,
                });
              }}
            >
              3
            </button>
            <button
              className="global-btn setting-button"
              disabled={gameSettings.numberOfPlayers === 4 ? true : false}
              onClick={() => {
                setGameSettings({
                  ...gameSettings,
                  numberOfPlayers: 4,
                });
              }}
            >
              4
            </button>
          </div>
          <div className="board-size">
            <h4>Board size</h4>
            <button
              className="global-btn setting-button"
              disabled={gameSettings.boardSize === 10 ? true : false}
              onClick={() => {
                setGameSettings({
                  ...gameSettings,
                  boardSize: 10,
                });
              }}
            >
              10
            </button>
            <button
              className="global-btn setting-button"
              disabled={gameSettings.boardSize === 17 ? true : false}
              onClick={() => {
                setGameSettings({
                  ...gameSettings,
                  boardSize: 17,
                });
              }}
            >
              17
            </button>
            <button
              className="global-btn setting-button"
              disabled={gameSettings.boardSize === 25 ? true : false}
              onClick={() => {
                setGameSettings({
                  ...gameSettings,
                  boardSize: 25,
                });
              }}
            >
              25
            </button>
          </div>
        </div>
        <div className="settings-second-row">
          <div className="blocks-per-player">
            <h4>Number of blocks per player</h4>
            <button
              className="global-btn setting-button"
              disabled={gameSettings.numberOfBlocksInGame === 10 ? true : false}
              onClick={() => {
                setGameSettings({
                  ...gameSettings,
                  numberOfBlocksInGame: 10,
                });
              }}
            >
              10
            </button>
            <button
              className="global-btn setting-button"
              disabled={gameSettings.numberOfBlocksInGame === 15 ? true : false}
              onClick={() => {
                setGameSettings({
                  ...gameSettings,
                  numberOfBlocksInGame: 15,
                });
              }}
            >
              15
            </button>
            <button
              className="global-btn setting-button"
              disabled={gameSettings.numberOfBlocksInGame === 20 ? true : false}
              onClick={() => {
                setGameSettings({
                  ...gameSettings,
                  numberOfBlocksInGame: 20,
                });
              }}
            >
              20
            </button>
          </div>
          <div className="seconds-per-turn">
            <h4>Seconds per turn</h4>
            <button
              className="global-btn setting-button"
              disabled={gameSettings.secondsPerTurn === 10 ? true : false}
              onClick={() => {
                setGameSettings({
                  ...gameSettings,
                  secondsPerTurn: 10,
                });
              }}
            >
              10
            </button>
            <button
              className="global-btn setting-button"
              disabled={gameSettings.secondsPerTurn === 30 ? true : false}
              onClick={() => {
                setGameSettings({
                  ...gameSettings,
                  secondsPerTurn: 30,
                });
              }}
            >
              30
            </button>
            <button
              className="global-btn setting-button"
              disabled={gameSettings.secondsPerTurn === 60 ? true : false}
              onClick={() => {
                setGameSettings({
                  ...gameSettings,
                  secondsPerTurn: 60,
                });
              }}
            >
              60
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameSettings;

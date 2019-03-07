import React, { useState, useEffect } from 'react';
import './GameBoard.css';
import BoardColumn from './BoardColumn';
import Player from './GamePlayer';
import WinnerFinder from './WinnerFinder';

function GameBoard() {

  const [nColumns, setNColumns] = useState(7);
  const [nRows, setNRows] = useState(6);
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [moveHistory, setMoveHistory] = useState([]);
  const [gameState, setGameState] = useState([]);
  const [winner, setWinner] = useState(null);

  let initialPlayerIndex = 0;
  const playerColours = ['green', 'pink'];
  const wf = new WinnerFinder(isCoordOnBoard);
  let columnElements = [];

  setPlayers(['player1', 'player2'].map((playerName, index) => {
    return new Player(index, playerName, playerColours[index])
  }));
  setCurrentPlayer(players[initialPlayerIndex])

  useEffect(() => {
    columnElements = generateColumnElements();
    setGameState(buildGameState());
  })

  return (
    <div className="Board">
      <p>{winner ? winner.playerName : ''}</p>
      <div className="BoardGrid" >
        {columnElements}
      </div>
    </div>
  );

  function getCurrentPlayer() {
    return currentPlayer;
  }

  function getPlayerById(playerId) {
    return players[playerId]
  }

  function getNextPlayerIndex() {
    const currentPlayerIndex = players.indexOf(getCurrentPlayer());
    if (currentPlayerIndex + 1 >= players.length) {
      return 0;
    } else {
      return currentPlayerIndex + 1;
    }
  }

  function endCurrentPlayerTurn(move) {
    if (winner !== null) return;
    const newMoveHistory = [...moveHistory, move];
    setCurrentPlayer(players[getNextPlayerIndex()])
    setMoveHistory(newMoveHistory);
    setGameState(buildGameState(newMoveHistory));

    const lastMove = moveHistory.slice(-1)[0];
    wf.analyse(
      gameState,
      [lastMove.columnId, lastMove.rowIndex]);
    if (wf.winnerFound) {
      setWinner(wf.winner);
    }
  }

  function generateTokenObjects(column) {
    return column.map(rowSpace => {
      return {
        ...rowSpace
      }
    })
  }

  function buildGameState(localMoveHistory = moveHistory) {
    const newGameState = [...Array(nColumns)].map(() => {
      return [...Array(nRows)].map((rowSpace, rowIndex) => {
        return {
          ownedBy: null,
          rowIndex
        }
      });
    })

    localMoveHistory.forEach(move => {
      newGameState[move.columnId][move.rowIndex]
        .ownedBy = getPlayerById(move.playerId)
    })

    return newGameState;
  }

  function generateColumnObjects() {
    return gameState.map(column => {
      return {
        tokens: generateTokenObjects(column)
      }
    })
  }

  function isCoordOnBoard(columnIndex, rowIndex) {
    return ![
      columnIndex < nColumns,
      rowIndex < nRows,
      columnIndex >= 0,
      rowIndex >= 0
    ].includes(false);
  }

  function generateColumnElements() {
    const columnObjects = generateColumnObjects();

    return columnObjects.map((col, index) => {
      return (
        <React.Fragment key={index}>
          <BoardColumn columnid={index}
            tokenobjects={col.tokens}
            getcurrentplayer={getCurrentPlayer}
            movesignal={endCurrentPlayerTurn} / >
        </React.Fragment>
      )
    })
  }
}

export default GameBoard;

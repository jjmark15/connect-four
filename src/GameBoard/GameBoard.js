import React, { Component } from 'react';
import './GameBoard.css';
import BoardColumn from './BoardColumn';
import Player from './GamePlayer';
import WinnerFinder from './WinnerFinder';

class GameBoard extends Component {

  constructor() {
    super()

    this.freshState = {
      nColumns: 7,
      nRows: 6,
      players: [],
      currentPlayer: null,
      moveHistory: [],
      gameState: [],
      winner: null
    };

    this.state = {...this.freshState};

    this.initialPlayerIndex = 0;

    this.playerColours = ['green', 'pink'];

    this.generateColumnElements = this.generateColumnElements.bind(this);
    this.generateTokenObjects = this.generateTokenObjects.bind(this);
    this.generateColumnObjects = this.generateColumnObjects.bind(this);
    this.getCurrentPlayer = this.getCurrentPlayer.bind(this);
    this.getNextPlayerIndex = this.getNextPlayerIndex.bind(this);
    this.endCurrentPlayerTurn = this.endCurrentPlayerTurn.bind(this);
    this.createPlayers = this.createPlayers.bind(this);
    this.isCoordOnBoard = this.isCoordOnBoard.bind(this);

    this.WinnerFinder = new WinnerFinder(this.isCoordOnBoard);
  }

  createPlayers(playerNames, cb=()=>{}) {
    this.setState({
      players: playerNames.map((playerName, index) => {
        return new Player(index, playerName, this.playerColours[index])
      })
    }, cb)
  }

  getCurrentPlayer() {
    return this.state.currentPlayer;
  }

  getPlayerById(playerId) {
    return this.state.players[playerId]
  }

  getNextPlayerIndex() {
    const currentPlayerIndex = this.state.players.indexOf(this.getCurrentPlayer());
    if (currentPlayerIndex + 1 >= this.state.players.length) {
      return 0;
    } else {
      return currentPlayerIndex + 1;
    }
  }

  endCurrentPlayerTurn(move) {
    if (this.state.winner !== null) return;
    const newMoveHistory = [...this.state.moveHistory, move];
    this.setState({
      currentPlayer: this.state.players[this.getNextPlayerIndex()],
      moveHistory: newMoveHistory,
      gameState: this.buildGameState(newMoveHistory)
    }, () => {
      const lastMove = this.state.moveHistory.slice(-1)[0];
      this.WinnerFinder.analyse(
        this.state.gameState,
        [lastMove.columnId, lastMove.rowIndex]);
      if (this.WinnerFinder.winnerFound) {
        this.setWinner(this.WinnerFinder.winner);
      }
    })
  }

  setWinner(player, cb = () => {}) {
    console.log(player.playerName);
    this.setState({
      winner: player
    }, cb)
  }

  generateTokenObjects(column) {
    return column.map(rowSpace => {
      return {
        ...rowSpace
      }
    })
  }

  buildGameState(moveHistory = this.state.moveHistory) {
    const newGameState = [...Array(this.state.nColumns)].map(() => {
      return [...Array(this.state.nRows)].map((rowSpace, rowIndex) => {
        return {
          ownedBy: null,
          rowIndex
        }
      });
    })

    moveHistory.forEach(move => {
      newGameState[move.columnId][move.rowIndex]
        .ownedBy = this.getPlayerById(move.playerId)
    })

    return newGameState;
  }

  generateColumnObjects() {
    return this.state.gameState.map(column => {
      return {
        tokens: this.generateTokenObjects(column)
      }
    })
  }

  isCoordOnBoard(columnIndex, rowIndex) {
    return ![
      columnIndex < this.state.nColumns,
      rowIndex < this.state.nRows,
      columnIndex >= 0,
      rowIndex >= 0
    ].includes(false);
  }

  componentDidMount() {
    this.setState({gameState: this.buildGameState()}, () => {
      this.createPlayers(['player1', 'player2'], () => {
        this.setState({
          currentPlayer: this.state.players[this.initialPlayerIndex],
        })
      })
    })
  }

  render() {
    const columnElements = this.generateColumnElements();

    return (
      <div className="Board">
        <p>{this.state.winner ? this.state.winner.playerName : ''}</p>
        <div className="BoardGrid" >
          {columnElements}
        </div>
      </div>
    );
  }

  generateColumnElements() {
    const columnObjects = this.generateColumnObjects();

    return columnObjects.map((col, index) => {
      return (
        <React.Fragment key={index}>
          <BoardColumn columnid={index}
            tokenobjects={col.tokens}
            getcurrentplayer={this.getCurrentPlayer}
            movesignal={this.endCurrentPlayerTurn} / >
        </React.Fragment>
      )
    })
  }
}

export default GameBoard;

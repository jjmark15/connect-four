import React, { Component } from 'react';
import Token from './Token/Token';
import GameMove from './GameMove';

class BoardColumn extends Component {

  constructor() {
    super()

    this.generateTokenElements = this.generateTokenElements.bind(this);
    this.submitMove = this.submitMove.bind(this);
    this.getNextTokenIndex = this.getNextTokenIndex.bind(this);
  }

  getNextTokenIndex() {
    let nextIndex = null
    this.props.tokenobjects.some((token, index) => {
      if (token.ownedBy === null) {
        nextIndex = index;
        return true;
      }
      return false;
    })
    return nextIndex;
  }

  submitMove() {
    const move = new GameMove(
      this.props.getcurrentplayer().playerId,
      this.props.columnid,
      this.getNextTokenIndex()
    )
    if (move.rowIndex !== null) {
      this.props.movesignal(move);
    }
  }

  render() {
    const tokenElements = this.generateTokenElements();

    return (
      <div className="BoardGridColumn" onClick={this.submitMove} >
        {tokenElements}
      </div>
    );
  }

  generateTokenElements() {
    return this.props.tokenobjects.map((token, index) => {
      return (
        <React.Fragment key={index}>
          <Token tokencolour={token.ownedBy !== null ? token.ownedBy.playerColour : "grey"} / >
        </React.Fragment>
      )
    }).reverse()
  }
}

export default BoardColumn;

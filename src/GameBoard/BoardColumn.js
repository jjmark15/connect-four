import React from 'react';
import Token from './Token/Token';
import GameMove from './GameMove';

function BoardColumn(props) {
  const tokenElements = generateTokenElements();

  return (
    <div className="BoardGridColumn" onClick={submitMove} >
      {tokenElements}
    </div>
  );

  function getNextTokenIndex() {
    let nextIndex = null
    props.tokenobjects.some((token, index) => {
      if (token.ownedBy === null) {
        nextIndex = index;
        return true;
      }
      return false;
    })
    return nextIndex;
  }

  function submitMove() {
    const move = new GameMove(
      props.getcurrentplayer().playerId,
      props.columnid,
      getNextTokenIndex()
    )
    if (move.rowIndex !== null) {
      props.movesignal(move);
    }
  }

  function generateTokenElements() {
    return props.tokenobjects.map((token, index) => {
      return (
        <React.Fragment key={index}>
          <Token tokencolour={token.ownedBy !== null ? token.ownedBy.playerColour : "grey"} / >
        </React.Fragment>
      )
    }).reverse()
  }
}

export default BoardColumn;

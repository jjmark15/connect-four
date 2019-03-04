class WinnerFinder {

  constructor(coordValidator) {
    this.winnerFound = false;
    this.winner = null;
    this.BoardState = null;
    this.coordValidator = coordValidator;

    this.doesLineContainWin = this.doesLineContainWin.bind(this);
    this.getOwnerOfTokenAtPosition = this.getOwnerOfTokenAtPosition.bind(this);
  }

  analyse(BoardState, newMoveCoords) {
    this.setBoardSate(BoardState);

    if (this.isTokenInAWin(...newMoveCoords)) {
      this.winnerFound = true;
      this.winner = this.getOwnerOfTokenAtPosition(...newMoveCoords);
    }

    this.clearBoardState();
    return this.winnerFound;
  }

  setBoardSate(BoardState) {
    this.BoardState = [].concat(BoardState);
  }

  clearBoardState() {
    this.BoardState = null;
  }

  isTokenInAWin(columnIndex, rowIndex) {
    const coordLines = this.getCoordLinesFrom(columnIndex, rowIndex);

    return coordLines.filter(coordLine => {
      return this.doesLineContainWin(coordLine);
    }).length > 0;
  }

  doesLineContainWin(coordLine) {
    let win = false;
    let matchChainLength = 1;

    coordLine.map(coords => this.getOwnerOfTokenAtPosition(...coords))
    .reduce((previousOwner, owner) => {
      if (previousOwner === null || owner === null) {
        // check if either owners are null
        return owner;
      } else if (previousOwner.playerId === owner.playerId) {
        matchChainLength += 1;
      }

      if (!win && matchChainLength === 4) {
        win = true
      }

      return owner;
    }, null);

    return win;
  }

  getCoordLinesFrom(columnIndex, rowIndex) {
    return [0, NaN, 1, -1].map(gradient => {
      return this.getSpanCoordLineFrom(columnIndex, rowIndex, gradient);
    });
  }

  getSpanCoordLineFrom(columnIndex, rowIndex, gradient) {
    // y = mx + c #gcsemaths
    const yIntercept = rowIndex - (columnIndex * gradient);
    let line = [];

    [...Array(7)].forEach((_, index) => {
      let newCoord = null;
      if (isNaN(gradient) || Math.abs(gradient) === Infinity) {
        newCoord = [columnIndex, index];
      } else {
        newCoord = [index, (gradient * index) + yIntercept]
      }
      if (this.coordValidator(...newCoord)) line.push(newCoord);
    })

    return line;
  }

  getOwnerOfTokenAtPosition(columnIndex, rowIndex) {
    return this.BoardState[columnIndex][rowIndex].ownedBy;
  }
}

export default WinnerFinder;
class WinnerFinder {

  constructor(coordValidator) {
    this.winnerFound = false;
    this.winner = null;
    this.BoardState = null;
    this.coordValidator = coordValidator;

    this.getPositionUpFrom = this.getPositionUpFrom.bind(this);
    this.getPositionDownFrom = this.getPositionDownFrom.bind(this);
    this.getPositionRightFrom = this.getPositionRightFrom.bind(this);
    this.getPositionUpRightFrom = this.getPositionUpRightFrom.bind(this);
    this.getPositionDownRightFrom = this.getPositionDownRightFrom.bind(this);
    this.isCoordLineWin = this.isCoordLineWin.bind(this);
    this.getOwnerOfTokenAtPosition = this.getOwnerOfTokenAtPosition.bind(this);
  }

  isTokenInAWin(token, columnIndex, rowIndex) {
    const coordLines = this.getCoordLinesFrom(columnIndex, rowIndex)
      .filter(coordLine => this.isCoordLineValid(coordLine));

    return coordLines.filter(coordLine => {
      return this.isCoordLineWin(coordLine);
    }).length > 0;
  }

  isCoordLineValid(coordLine) {
    let valid = true;
    coordLine.some(coord => {
      if (this.coordValidator(...coord)) {
        return false;
      }
      valid = false;
      return true;
    })
    return valid;
  }

  isCoordLineWin(coordLine) {
    // compare all following owners with the first owner/player
    const firstPlayer = this.getOwnerOfTokenAtPosition(...coordLine[0]);

    let matchingUser = true;

    coordLine.some(coord => {
      const owner = this.getOwnerOfTokenAtPosition(...coord);

      if (firstPlayer === null || owner === null) {
        // check if either owners are null
        matchingUser = false;
      } else if (firstPlayer.playerId !== owner.playerId) {
        // check if users don't equal each other
        matchingUser = false;
      }
      return !matchingUser;
    })

    return matchingUser;
  }

  getCoordLinesFrom(columnIndex, rowIndex) {
    return [this.getPositionRightFrom, this.getPositionUpFrom,
      this.getPositionUpRightFrom, this.getPositionDownRightFrom]
      .map(translatorFunc => {
        return this.getCoordLineFrom(columnIndex, rowIndex, translatorFunc);
      });
  }

  getOwnerOfTokenAtPosition(columnIndex, rowIndex) {
    return this.BoardState[columnIndex][rowIndex].ownedBy;
  }

  getPositionRightFrom(columnIndex, rowIndex) {
    return [columnIndex + 1, rowIndex];
  }

  getPositionUpFrom(columnIndex, rowIndex) {
    return [columnIndex, rowIndex + 1];
  }

  getPositionDownFrom(columnIndex, rowIndex) {
    return [columnIndex, rowIndex - 1];
  }

  getPositionUpRightFrom(columnIndex, rowIndex) {
    const above = this.getPositionUpFrom(columnIndex, rowIndex);
    return this.getPositionRightFrom(...above)
  }

  getPositionDownRightFrom(columnIndex, rowIndex) {
    const below = this.getPositionDownFrom(columnIndex, rowIndex);
    return this.getPositionRightFrom(...below)
  }

  getCoordLineFrom(columnIndex, rowIndex, translatorFunc) {
    let coords = [];
    [...Array(4)].forEach(() => {
      if (coords.length === 0) {
        coords.push([columnIndex, rowIndex])
      } else {
        const next = coords.slice(-1)[0];
        coords.push(translatorFunc(...next));
      }
    })
    return coords;
  }

  analyse(BoardState) {
    this.setBoardSate(BoardState);

    this.BoardState.some((column, columnIndex) => {
      column.some((token, rowIndex) => {
        if (this.isTokenInAWin(token, columnIndex, rowIndex)) {
          this.winnerFound = true;
          this.winner = this.getOwnerOfTokenAtPosition(columnIndex, rowIndex);
        }
        return this.winnerFound;
      })

      return this.winnerFound;
    })

    this.clearBoardState();
    return this.winnerFound;
  }

  setBoardSate(BoardState) {
    this.BoardState = [].concat(BoardState);
  }

  clearBoardState() {
    this.BoardState = null;
  }
}

export default WinnerFinder;
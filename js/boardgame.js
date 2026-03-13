export function BoardGame() {
  this.gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  this.markCounter = 0;

  this.markValue = {
    X: 1,
    O: -1,
  };

  this.markGrid = function (mark, gridArea) {
    if (this.gameBoard[gridArea[0]][gridArea[1]] !== "") {
      console.log("This cell is full. Choose another !");
      return false;
    }
    this.gameBoard[gridArea[0]][gridArea[1]] = this.markValue[mark];
    this.markCounter++;
    return true;
  };

  this.showGameBoard = function () {
    console.log(this.gameBoard);
  };

  this.checkState = function () {
    let res;
    for (let r = 0; r < 3; r++) {
      res = 0;
      for (let c = 0; c < 3; c++) {
        res += this.gameBoard[r][c];
      }
      if (res === 3 || res === -3) {
        return {
          res,
          gridConfig: [
            [r, 0],
            [r, 1],
            [r, 2],
          ],
        };
      }
    }
    for (let c = 0; c < 3; c++) {
      res = 0;
      for (let r = 0; r < 3; r++) {
        res += this.gameBoard[r][c];
      }
      if (res === 3 || res === -3) {
        return {
          res,
          gridConfig: [
            [0, c],
            [1, c],
            [2, c],
          ],
        };
      }
    }
    res = 0;
    for (let i = 0; i < 3; i++) {
      res += this.gameBoard[i][i];
    }
    if (res === 3 || res === -3) {
      return {
        res,
        gridConfig: [
          [0, 0],
          [1, 1],
          [2, 2],
        ],
      };
    }
    res = 0;
    for (let i = 0; i < 3; i++) {
      res += this.gameBoard[i][2 - i];
    }
    if (res === 3 || res === -3) {
      return {
        res,
        gridConfig: [
          [0, 2],
          [1, 1],
          [2, 0],
        ],
      };
    }
    return this.markCounter === 9 ? { res: "draw" } : { res: "continue" };
  };
}

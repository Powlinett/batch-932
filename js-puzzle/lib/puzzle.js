// This function determine if a tile can move or not

const canMove = (tile) => {
  // 1. GET CURRENT TILE POSITION
  const tileColumnIndex = tile.cellIndex;
  const tileRowIndex = tile.parentElement.rowIndex;

  // 2. GET THE EMPTY TILE POSITION
  const emptyTile = document.querySelector('.empty');
  const emptyTileColumnIndex = emptyTile.cellIndex;
  const emptyTileRowIndex = emptyTile.parentElement.rowIndex;

  // 3. CHECK IF EMPTY NEIGHBORS
  const emptyUp = emptyTileColumnIndex === tileColumnIndex && tileRowIndex + 1 === emptyTileRowIndex;
  const emptyDown = emptyTileColumnIndex === tileColumnIndex && tileRowIndex - 1 === emptyTileRowIndex;
  const emptyRight = emptyTileRowIndex === tileRowIndex && tileColumnIndex - 1 === emptyTileColumnIndex;
  const emptyLeft = emptyTileRowIndex === tileRowIndex && tileColumnIndex + 1 === emptyTileColumnIndex;

  return emptyUp || emptyDown || emptyRight || emptyLeft;
};


const button = document.querySelector('#show-hint');


button.addEventListener('click', (event) => {
  const activeClass = document.querySelector('.hint');
  activeClass.classList.add('active');
});


const tiles = document.querySelectorAll('td');

tiles.forEach((tile) => {
  tile.addEventListener('click', (event) => {
    if (canMove(tile)) {
      const emptyTile = document.querySelector('.empty');
      emptyTile.classList.remove('empty');
      tile.classList.add('empty');
      emptyTile.innerText = tile.innerText;
      tile.innerText = "";
      if (winCondition()) {
        alert('NIIIIIICE');
      };
    };
  });
});

const winCondition = () => {
  const array = [];
  tiles.forEach((tile) => {
    array.push(tile.innerText);
  });
  const stringNumbers = array.join(',');
  const winString = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
  return stringNumbers === winString;
};

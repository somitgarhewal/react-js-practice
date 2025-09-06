import React from "react";
const alpha = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H']
function ChessBoardUI() {
const handleClick = () => {
    
}
  const board = [];
  for (let row = 0; row < 8; row++) {
    const squares = [];
    for (let col = 0; col < 8; col++) {
      const isDark = (row + col) % 2;
      squares.push(
        <div className={`w-16 h-16 ${isDark ? "bg-black" : "bg-white"}`}>
            {col === 2 && row === 2 &&<div onClick={() => handleClick()} className="bg-red-200 h-4 w-4 rounded-full"></div>}
        </div>
      );
    }
    board.push(<div className="flex">{squares}</div>);
  }

  return <div>{board}</div>;
}

export default ChessBoardUI;

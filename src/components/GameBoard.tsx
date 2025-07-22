import type { GameBoardState, SelectSquareHandler } from '../types/types.ts';

type GameBoardProps = {
  gameBoard: GameBoardState;
  onSelectSquare: SelectSquareHandler;
};

export default function GameBoard({
  onSelectSquare,
  gameBoard,
}: GameBoardProps) {
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={symbol !== null}
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export type PlayerSymbol = 'X' | 'O' | null;
export type PlayerId = 'X' | 'O';
export type Players = Record<PlayerId, string>;

export type GameBoardState = PlayerSymbol[][];

export type Turn = {
  square: { row: number; col: number};
  player: PlayerSymbol;
};

export type SelectSquareHandler = (row: number, col: number) => void;

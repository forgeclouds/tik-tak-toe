import type {  Turn } from '../types/types.ts';

type LogProps = {
  turns: Turn[];
};

export default function Log({ turns }: LogProps) {
  return (
    <ol id="log">
      {turns.map(turn => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  )
}

import Board from "./Board";
import { useBoard } from "./../hooks/useBoard";

interface tetrisProps {
  rows: number;
  colums: number;
  setGameOver: boolean;
}

const Tetris = ({ rows, colums, setGameOver }: tetrisProps) => {
  const [board, setBoard] = useBoard({ rows, colums });
  return (
    <div className="">
      <Board board={board} />
    </div>
  );
};

export default Tetris;

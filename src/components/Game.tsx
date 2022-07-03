import Menu from "./Menu";
import Tetris from "./Tetris";
import { useGameOver } from "./../hooks/useGameOver";

interface gameProps {
  rows: number;
  colums: number;
}

const Game = ({ rows, colums }: gameProps) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const start = () => {
    resetGameOver();
  };

  return (
    <div>
      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        <Tetris rows={rows} colums={colums} setGameOver={setGameOver} />
      )}
    </div>
  );
};

export default Game;

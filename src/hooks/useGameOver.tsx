import { useCallback, useState } from "react";

export const useGameOver: any = () => {
  const [gameOver, setGameOver] = useState(true);
  const resetGameOver = useCallback(() => {
    setGameOver(false);
  }, []);
  return [gameOver, setGameOver, resetGameOver];
};

import { useState } from "react";
import { buildBoard } from "../business/Board";

interface useBoardProps {
  rows: number;
  colums: number;
}

export const useBoard = ({ rows, colums }: useBoardProps) => {
  const [board] = useState(buildBoard({ rows, colums }));

  return [board];
};

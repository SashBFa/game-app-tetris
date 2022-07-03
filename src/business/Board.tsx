import { defaultCell } from "./Cell";

interface buildBoardProps {
  rows: number;
  colums: number;
}

export const buildBoard = ({ rows, colums }: buildBoardProps) => {
  const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: colums }, () => ({ ...defaultCell }))
  );
  return {
    rows: builtRows,
    size: { rows, colums },
  };
};

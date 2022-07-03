import BoardCell from "./BoardCell";

const Board = ({ board }: any) => {
  console.log("board", board);
  const boardStyles: any = {
    gridTempateRows: `repeat(${board.size.rows}, 1fr)`,
    gridTempateColumns: `repeat(${board.size.columns}, 1fr)`,
  };
  return (
    <div
      className="my-1 mx-auto grid gap-[2px] w-[45vw] h-[90vh] bg-indigo-900 border-indigo-900 border-8 rounded-lg shadow-lg"
      style={boardStyles}
    >
      {board.rows.map((row: any, y: number) =>
        row.map((cell: any, x: number) => (
          <BoardCell key={x * board.size.columns + x} cell={cell} />
        ))
      )}
    </div>
  );
};

export default Board;

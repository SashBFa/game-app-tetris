const BoardCell = ({ cell }: any) => (
  <div className={`w-auto rounded-md relative ${cell.className}`}>
    <div className="absolute z-10 w-[6px] h-[6px] -left-[2px] -top-[2px] bg-white/40 rounded"></div>
  </div>
);
export default BoardCell;

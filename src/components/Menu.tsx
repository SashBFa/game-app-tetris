interface menuProps {
  onClick: () => void;
}

const Menu = ({ onClick }: menuProps) => {
  return (
    <div className="flex justify-center items-center min-h-[50vh] z-50">
      <button
        onClick={onClick}
        className="py-10 px-20 text-3xl  rounded-2xl bg-white text-black shadow-lg cursor-pointer hover:bg-white/80"
      >
        Play Tetris
      </button>
    </div>
  );
};

export default Menu;

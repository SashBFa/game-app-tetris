import Game from "./components/Game";

const App = () => {
  return (
    <main className="bg-indigo-800 h-screen p-3 text-center text-white">
      <Game rows={20} colums={10} />
    </main>
  );
};

export default App;

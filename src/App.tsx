import "./App.css";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center flex-col gap-2 min-h-screen">
        <img
          src={reactLogo}
          className="size-20 place-self-center animate-[spin_infinite_20s_linear] hover:drop-shadow-[0_0_1em_#61dafbaa]"
        />
        <h1>My React Journey!</h1>
        <p className="text-xs">
          I'm on a journey to learn React. This is my site where I host all of
          the mini-projects that I build as a challenge for myself
        </p>
      </div>
    </>
  );
}

export default App;

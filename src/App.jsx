import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="bg-[url('./assets/background.png')] md:bg-[url('./assets/background2.png')] bg-fixed bg-no-repeat bg-cover md:bg-contain">
        <div className="container-xl mx-auto justify-items-center min-w-900 max-w-7xl h-full drop-shadow-[0_0px_35px_rgba(0,0,0,0.15)] bg-[rgb(254,254,254,0.60)] z-10">
          <Home />
        </div>
        <div className="container-xl mx-auto justify-items-center min-w-900 h-full relative bg-white z-20">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;

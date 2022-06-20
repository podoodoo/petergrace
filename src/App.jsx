import "./App.css";
import Home from "./pages/Home";
import Rsvp from "./pages/Rsvp";
import Info from "./pages/Info";

function App() {
  return (
    <>
      <main className="bg-[url('./assets/background.png')] md:bg-[url('./assets/background2.png')] md:bg-no-repeat md:bg-cover bg-fixed">
        <div className="flex container justify-center align-center m-auto flex-col h-full max-w-7xl drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)] bg-[rgb(254,254,254,0.75)]">
          <section className="h-screen w-full">
            <Home />
          </section>
          <section className="h-screen w-full">
            <Info />
          </section>
          <section className="h-screen w-full">
            <Rsvp />
          </section>
          <footer className="h-8 bg-red-100 flex justify-center pt-2">
            <div className="h-2 text-xs">©happilyeverbaes 2022</div>
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;

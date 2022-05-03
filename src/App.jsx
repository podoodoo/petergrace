import "./App.css";
import Home from "./pages/Home";
import Rsvp from "./pages/Rsvp";

function App() {
  return (
    <>
      <div className="bg-none md:bg-[url('./assets/background2.png')] md:bg-no-repeat md:bg-cover md:bg-fixed">
        <Home />
        <Rsvp />
      </div>
    </>
  );
}

export default App;

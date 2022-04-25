import "./App.css";
import Home from "./pages/Home";
import Rsvp from "./pages/Rsvp";

function App() {
  return (
    <>
      <div className="bg-[url('./assets/background.png')] md:bg-[url('./assets/background2.png')] bg-fixed bg-no-repeat bg-cover">
        <Home />
        <Rsvp />
      </div>
    </>
  );
}

export default App;

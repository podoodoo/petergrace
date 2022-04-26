import "./App.css";
import Home from "./pages/Home";
import Rsvp from "./pages/Rsvp";

function App() {
  return (
    <>
      <div className="bg-[url('./assets/background.png')] sm:bg-[url('./assets/background2.png')] bg-no-repeat bg-cover bg-fixed">
        <Home />
        <Rsvp />
      </div>
    </>
  );
}

export default App;

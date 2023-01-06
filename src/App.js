import "./App.css";
import Data from "./component/data";
import Header from "./component/header";
import Navbar from "./component/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Data />
    </div>
  );
}

export default App;

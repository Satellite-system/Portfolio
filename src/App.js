import Navbar from "./component/navbar/Navbar";
import './App.css'
import Intro from "./component/Intro/Intro";
import Services from "./component/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services/>
    </div>
  );
}

export default App;

import Navbar from "./component/navbar/Navbar";
import './App.css'
import Intro from "./component/Intro/Intro";
import Services from "./component/Services/Services";
import Experience from "./component/Experience/Experience";
import Works from "./component/Works/Works";
import Portfolio from "./component/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
    </div>
  );
}

export default App;

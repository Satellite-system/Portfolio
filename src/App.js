import Navbar from "./component/navbar/Navbar";
import './App.css'
import Intro from "./component/Intro/Intro";
import Services from "./component/Services/Services";
import Experience from "./component/Experience/Experience";
import Works from "./component/Works/Works";
import Portfolio from "./component/Portfolio/Portfolio";
import Testimonial from "./component/Testimonial/Testimonial";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

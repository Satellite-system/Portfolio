import Navbar from "./component/navbar/Navbar";
import './App.css'
import Intro from "./component/Intro/Intro";
import Education from "./component/Education/Education";
import Experience from "./component/Experience/Experience";
import Works from "./component/Works/Works";
import Portfolio from "./component/Portfolio/Portfolio";
import Testimonial from "./component/Testimonial/Testimonial";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App" style={{background: darkMode?'#000000':'', color: darkMode?'#ffffff':''}}>
      <Navbar />
      <Intro />
      <Education/>
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

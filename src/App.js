import "./App.css";
import Footer from "./components/Footer/Footer";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Navbar from "./components/Navabar/Navbar";
import Upper from "./components/Upper/Upper";
import Why from "./components/Why/Why";

function App() {
  return (
    <>
      <Navbar />
      <Upper />
      <HowItWorks />
      <Why />
      <Footer />
    </>
  );
}

export default App;

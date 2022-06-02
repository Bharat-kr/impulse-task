import "./App.css";
import Footer from "./components/Footer/Footer";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Navbar from "./components/Navabar/Navbar";
import Upper from "./components/Upper/Upper";

function App() {
  return (
    <>
      <Navbar />
      <Upper />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Mentors from "./components/Mentors/Mentors";
import Navbar from "./components/Navabar/Navbar";
import Review from "./components/reviews/Review";
import Stats from "./components/Stats/Stats";
import TryItOut from "./components/TryItOut/TryItOut";
import Upper from "./components/Upper/Upper";
import Uses from "./components/Uses/Uses";
import Why from "./components/Why/Why";

function App() {
  return (
    <>
      <Navbar />
      <Upper />
      <HowItWorks />
      <Why />
      <Mentors />
      <div className="callback">
        <h1 className="headings">Get your answers instantly from them</h1>
        <TryItOut />
      </div>
      <Review />
      <Uses />
      <Stats />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;

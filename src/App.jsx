import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroImage from "./components/HeroImage";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";
import Reason from "./components/Reason";

function App() {
  return (
    <>
      <div className="bg-pattern ">
        <Navbar />
        <Hero />
      </div>
      <HeroImage />
      <About />
      <Reason />
      <Questions />
      <Footer />
    </>
  );
}

export default App;

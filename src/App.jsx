import About from "./components/About";
import Hero from "./components/Hero";
import HeroImage from "./components/HeroImage";
import Navbar from "./components/Navbar";
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
    </>
  );
}

export default App;

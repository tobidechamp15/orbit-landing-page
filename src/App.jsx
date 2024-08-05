import Hero from "./components/Hero";
import HeroImage from "./components/HeroImage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-pattern ">
        <Navbar />
        <Hero />
      </div>
      <HeroImage />
    </>
  );
}

export default App;

import "./App.css";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/Navbar";
import LogoSection from "./sections/LogoSection";
import CardsSection from "./sections/CardsSection";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <CardsSection />
      {/* <ExperienceSection /> */}
      <TechStack />
      <Footer />
    </>
  );
};

export default App;

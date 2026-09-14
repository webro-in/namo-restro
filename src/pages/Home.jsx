import Hero from "../sections/Hero";
import About from "../sections/About";
import Menu from "../sections/Menu";
import Gallery from "../sections/Gallery";
import Experience from "../sections/Experience";
import Reviews from "../sections/Reviews";
import Reservation from "../sections/Reservation";
import Location from "../sections/Location";
import CTA from "../sections/CTA";
import Footer from "../sections/Footer";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Experience />
      <Reviews />
      <Reservation />
      <Location />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
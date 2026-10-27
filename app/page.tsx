
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import Automation from "./components/automation";
import Process from "./components/process";
import WhyScaleSpace from "./components/whyscalespace";
import About from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Automation />
      <Process />
      <WhyScaleSpace />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}


import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import Automation from "./components/automation";
import Process from "./components/process";
import WhyScaleSpace from "./components/whyscalespace";
import About from "./components/about";

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
    </main>
  );
}

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import FeaturedVideo from "@/components/sections/FeaturedVideo";
import Works from "@/components/sections/Works";
import Process from "@/components/sections/Process";
import Insights from "@/components/sections/Insights";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedVideo />
      <Works />
      <Process />
      <Insights />
      <Contact />
    </>
  );
}

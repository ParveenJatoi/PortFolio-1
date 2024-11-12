import Image from "next/image";
import Hero from "./hero";
import Skills from "./skills";
import About from "./About/page";
import Services from "./Services/page";
import Contact from "./Contact/page";

export default function Home() {
  return (
    <div>
    
      <Hero/>
      <About/>
      <Services/>
      
      <Skills/>
      <Contact/>

   
    </div>
  );
}

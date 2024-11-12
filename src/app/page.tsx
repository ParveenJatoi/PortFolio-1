import Image from "next/image";
import Hero from "./component/hero";
import Skills from "./skills";
import About from "./about/page";

export default function Home() {
  return (
    <div>
    
      <Hero/>
      <About/>
      <Skills/>

   
    </div>
  );
}

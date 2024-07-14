import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/navbar";
import { Values } from "./components/values";
import {Expertise }from "./components/expertise"
import { Floating } from "./components/floating";
import { Hero } from "./components/hero";
import {Staff} from "./components/staff"
import About from "./components/about"
import Work from "./components/work";

export default function Home() {
  return (
    <main className="w-full bg-white flex flex-col justify-center items-center overflow-x-hidden">
      <Floating/>
     <div className="w-full">
      <div className="block md:hidden">
      <Header/>
      </div>
      <Hero/>
      
      <Expertise/>
      <div id="about">
      <About/>
      </div>
      <div id="values">
      <Values/>
      </div>
      <div id="team">
      <Staff/>
      </div>
      <div>
        <Work/>
      </div>
      <div id="contact">
      <Footer/>
      </div>
     </div>
      
    </main>
  );
}

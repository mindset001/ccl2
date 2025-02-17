import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/navbar";
import { Values } from "./components/values";
import {Expertise }from "./components/expertise"
import { Floating } from "./components/floating";
import { Hero } from "./components/hero";

import Work from "./components/work";
import NewAbout from "./components/new";
import Approach from "./components/approach";
import NewTeam from "./components/newTeam";
import NewTeam2 from "./components/newTeam2";
import TechTeam from "./components/techTeam";
import TeachTeam2 from "./components/teachTeam2";

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
      <div id="values">
      <Values/>
      </div>
   
      <div id="about">
      <NewAbout />
      <Work/>
      </div>

      <div>
        <Approach/>
      </div>
      <div className="hidden lg:block" id="team">
      <NewTeam/>
      <TechTeam/>
      </div>
      <div className="block lg:hidden" id="team">
      <NewTeam2/>
      <TeachTeam2/>
      </div>
      <div id="contact">
      <Footer/>
      </div>
     </div>
      
    </main>
  );
}

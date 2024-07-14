"use client";
import React from "react";

import { cn } from "../../utils/cn";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const content = [
  {
    title: "Who We Are",
    // title: "Chair Board of Directors ",
    
    description:
      "Capacity Connect Ltd (CCL) is a consultancy service provider that excels in the area of development and humanitarian assistance and non-profit management. We serve development and humanitarian organizations as well as public sector institutions globally to deliver people centered and locally led development solutions. We see ourselves not just as a consulting company, but part of a movement that connects stakeholders and enhance their capacity to catalyze and advance a more equitable, and sustainable world.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Who We Are
        </div>
      ),
  },
  {
    title: "Our Story",
    // title: "Chair Board of Directors ",
    
    description:
      "We are a group of development leaders privileged to have straddled the local-global development and humanitarian space, having led teams at national and global levels to deliver development interventions for many decades and across many countries around the world. We, along with many practitioners and academics in the field are disillusioned with current models of development and have decided to bring our wealth of experience and insights to complement local ingenuity to try out more locally led, sustainable and equitable development models to respond to our more complex and inequitable world.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Our Story
        </div>
      ),
  },
  {
    title: 'What We Do',
    // title: "Member Board of Directors",
    description:
      "Capacity Connect Ltd (CCL) is a consultancy service provider that excels in the area of development and humanitarian assistance and non-profit management. We serve development and humanitarian organizations as well as public sector institutions globally to deliver people centered and locally led development solutions. Capacity Connect is not just a consulting company, it is a movement that brings stakeholders together to catalyze and advance a more equitable, and sustainable world.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       What We Do
      </div>
    ),
  },

 
  
  {
    title: 'Our Mission',
    // title: "Member Board of Directors",
    description:
      "Our mission is to leverage our expansive local and global expertise to enhance capacity and foster connections for sustainable development. ",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Our Mission
        </div>
      ),
  },
  {
    title: 'Our Vision',
    // title: "Member Board of Directors",
    description:
      "We envision a world where communities everywhere are enabled to lead and achieve their development aspirations.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         Our Vision
        </div>
      ),
  },

 
];

function About() {
  return (
    <main className="bg-white mb-10 flex flex-col items-center justify-center">
   <div className="w-[90%] flex flex-col items-center">
        <div>
            <h1 className="text-align text-black text-4xl font-bold mt-10">About Us</h1>
        </div>
     <HoverEffect items={content} />
     </div>
     
  
   </main>
  )
}

export default About
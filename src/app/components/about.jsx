"use client";
import React from "react";

import { cn } from "../../utils/cn";

const content = [
  {
    name: "Who We Are",
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
    name: "Our Story",
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
    name: 'What We Do',
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
    name: 'Our Mission',
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
    name: 'Our Vision',
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
    <main className="bg-[#0E1729] mb-10 flex flex-col items-center justify-center">
    <h1 className="text-white my-10 text-4xl font-[700]">About Us</h1>
  
      <div className="w-[80%]">
      <div  className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 py-10",
        // className
      )}>
        {content.map((item, i) => (
          <div key={i} className="item ml-2" data-value="1">
            <div className="w-[445px] px-4 rounded-lg text-white flex flex-col items-center justify-center">
            <h1 className="text-3xl mb-4 font-bold">{item.name}</h1>
            <p className="lg:text-justify">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
     
  
   </main>
  )
}

export default About
"use client";

import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";

export function Values() {
  return (
   <main className="bg-white mb-10 flex flex-col items-center justify-center">
    <h1 className="text-black my-10 text-4xl font-[700]">Our Values</h1>
  
      <div className="">
      <div  className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 py-10",
        // className
      )}>
        {testimonials.map((item, i: number) => (
          <div key={i} className="item ml-2" data-value="1">
            <div className="w-[345px] px-4 rounded-lg h-[40vh] bg-[#0E1729] text-white flex flex-col items-center justify-center">
            <h1 className="text-3xl mb-4 font-bold">{item.name}</h1>
            <p className="text-center">{item.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
     
  
   </main>
  );
}

const testimonials = [
  {
    quote:
      "We connect people and organizations to form synergistic partnerships that delivers lasting change.",
    name: "Connection",

  },
  {
    quote:
      "We believe in the power of co-creation and collective action.",
    name: " Collaboration",
  
  },
  {
    quote: "We respect the dignity and humanity of every individual and are committed to fairness, inclusion, and justice in everything we do.",
    name: "Dignity",
   
  },
  {
    quote:
      "We consistently hold ourselves and each other to delivering excellence and ensuring the highest-level of professionalism in everything we do.",
    name: "Integrity",

  },
  {
    quote:
      "We are transparent about what we know and what we don’t know, and we own up when we make mistakes. We trust the wisdom of the local actors we serve.",
    name: "Humility",

  },
];

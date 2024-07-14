"use client";
import React from "react";
import { Boxes } from "../../components/ui/background-boxes";
import Logo from '../../../public/images/log.png'
import Image from "next/image";
import { cn } from "../../utils/cn";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";

export function Hero() {
  const words = [
    {
      text: "Capacity",
    },
    {
      text: "Connect",
    },
    {
      text: "Limited",
    },

  ];
  return (
    <main>
        <div className="bg-slate-900 px-10 flex items-center w-full justify-between p-4 hidden md:flex">
          {/* <Boxes /> */}
          <Image src={Logo} alt='' className='w-20' />
          <div className='hidden md:block'>
            <ul className='flex flex-row text-[14px] text-white  font-[400] px-4 gap-3'>
              {Navcontent.map((item, i: number) => (
                <li className='active:bg-[white] active:text-black active:rounded-[20px] active:p-2 text-[18px] font-[600]'><Link href={item.link}>{item.name}</Link></li>
              ))}

            </ul>
          </div>

        </div>
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      

        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <div className="flex flex-col items-center justify-center">
          <Boxes />
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            {/* Capacity Connect Limited */}

            {/* <div className="block">
              <TypeAnimation
                sequence={[
                  'Capacity Connect Limited',

                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-24px md:text-[60px] lg:text-[70px] font-[700]"
              />
            </div> */}

            <div className=" md:block">
              <TypewriterEffectSmooth words={words} className="text-[60px]" />
            </div>
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20 text-[14px] md:text-[20px]">
            Enhancing Capacity and Fostering Connections for Sustainable Development
          </p>
        </div>
      </div>
    </main>
  );
}



const Navcontent = [
  {
    link: '/',
    name: 'Home'
  },
  {
    link: '#about',
    name: 'About'
  },
  {
    link: '#values',
    name: 'Values'
  },
  {
    link: '#contact',
    name: 'Contact'
  },
  {
    link: '#team',
    name: 'Team'
  }

]
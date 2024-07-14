"use client";
import React from "react";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Jummy from "../../../public/images/jummy.png"
import Amina from "../../../public/images/aminach.png"
import Mai from "../../../public/images/mai.png"
import Ku from "../../../public/images/ku.png"

const content = [
  {
    name: "About Us",
    // title: "Chair Board of Directors ",
    
    description:
      "Capacity Connect Ltd (CCL) is a consultancy service provider that excels in the area of development and humanitarian assistance and non-profit management. We serve development and humanitarian organizations as well as public sector institutions globally to deliver people centered and locally led development solutions. We see ourselves not just as a consulting company, but part of a movement that connects stakeholders and enhance their capacity to catalyze and advance a more equitable, and sustainable world.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         About Us
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

  // {
  //   name: 'Fatima Jika',
  //   title: "Member Board of Directors",
  //   description:
  //     "Farouk is an obstetrics and gynecologist and project management expert with over 2 decades of clinical, managerial and leadership roles in the health and development sector. He had served as Country Director of Pathfinder International for Nigeria and Ghana from 2012 to 2020 and Senior Program Director/Regional Director from 2020 to 2022. He holds a medical degree from the University of Jos and a Master of Public Health from Liverpool School of Tropical Medicine.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  //       Fatima Jika
  //     </div>
  //   ),
  // },
  // {
  //   name: 'Mike Egboh',
  //   title: "Member Board of Directors",
  //   description:
  //     "A notable figure in the development sector in Nigeria and beyond with over 4 decades of leadership roles in the non-profit, global health and development sector. Mike was Country Director for Pathfinder International for close 2 decades. He also successfully led the PATH II project at the Project Director. More recently, he was the Country Director and Chief of Party for the Chemonics led Global Supply Chain project here in Nigeria. Mike currently mentors and coaches’ development leaders and organizations in the sub-region and globally. He holds a Master of Public Health from the Harvard University, School of public health. He is a recipient of various national and global awards including the prestigious alumni award of the Harvard School of Public Health and US president’s Volunteer Service Award.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  //       Mike Egboh
  //     </div>
  //   ),
  // },
  // {
  //   name: 'Mohammad Murtala Mai',
  //   title: "CEO/Secretary, Board of Directors",
  //   description:
  //     "Experienced and strategic, international development leader with almost 3 decades of success in managing complex, expansive, global, health and development initiatives focused on improving health and quality of lives of women, young people, and their communities. Murtala spent 22 years in various leadership roles at Pathfinder International including Country Director Nigeria and Ghana (2008-2012), Senior Technical Director Best Practices (2012-2016), Regional Director (2016-2018), Chief of Country and Program Strategy (2018-2020), Chief of Programs (2020-2022) and Executive Vice President 2022-2023). Previously, he was a Senior Consultant at Afri-project Consortium from 1996 to 2000. He had served as Senior Special Assistant Health to the Governor of Adamawa State (2008-2009), and a member of the board of the National Primary Healthcare Development Agency (2008-2012). He holds a medical degree from Ahmadu Bello University and a Master of Public Health (MPH) and Business Administration (MBA) from the University of Maastricht, Netherlands and the Frankfurt School of Business and Finance respectively.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  //      <Image
  //         src={Mai}
  //         width={300}
  //         height={300}
  //         className="h-full w-full object-cover"
  //         alt="linear board demo"
  //       />
  //     </div>
  //   ),
  // },
];

function About() {
  return (
    <main className='bg-[#0E1729] h-[80vh] w-full flex flex-col items-center'>
        <h1 className="text-white my-10 text-4xl font-[700]">About Us</h1>

        <div className="w-[80%] mt-10">
      <StickyScroll content={content} />
      </div>
    </main>
  )
}

export default About
"use client";
import React from "react";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Jummy from "../../../public/images/jumoke.png"
import Amina from "../../../public/images/aminach.png"
import Mai from "../../../public/images/mai.png"
import Ku from "../../../public/images/ku.png"
import Fati from "../../../public/images/fati.png"
import Mike from "../../../public/images/mike2.png"
import Jega from "../../../public/images/farouq.png"
import Kole from "../../../public/images/kole.png"
import Yash from "../../../public/images/yashaua.png"
import Amin from "../../../public/images/amin.png"
import Yak from "../../../public/images/yak.png"

const content = [
  {
    name: "Amina Bala Zakari",
    title: "Chair Board of Directors ",
    
    description:
      "Amina is a pharmacist and a health and social sector development expert with a wealth of experience in policy/strategic development and program design, management, and evaluation. She is also a seasoned administrator and a subject matter expert in democracy and governance with 10 years of experience at various levels of the Independent National Electoral Commission where she served as national commissioner in charge operations and logistics (2016-2018) and health and welfare (2018-2019. She was the acting Chairperson of the commission from June 2015 and October 2015. Previously, she served as Secretary of Health and Human Services (2004-2006) and Secretary Social Development (2006-2007) in the Federal Capital Territory Administration. She was also Senior Consultant Health at Afri-project Consortium from 1997 to 2001. Hajiya Amina serves on several boards including the Albino Foundation of Nigeria and Reach Care Multi-Services Nigeria Ltd.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         <Image
          src={Amina}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    name: 'Olajumoke Azogu,',
    title: "Member Board of Directors",
    description:
      "Jumoke holds a Ph.D. (Information Science) with about 15 years experience in Monitoring and Evaluation of Public Health programs, 9 years of which involve technical and team leadership. Currently the MEL Director with Palladium International for the USAID Integrated Health Program (IHP), a $225M USAID Nigeria-funded Reproductive, Maternal, Newborn, Child Health and Nutrition, and Malaria (RMNCH+NM) program for Health Systems Strengthening and Health Financing, where she provides strategic guidance and technical leadership, vision and management, capacity strengthening for MEL activities, working with National and State partners.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Jummy}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    name: "Kole Shettima PhD",
    title: "Member Board of Directors ",
    
    description:
      "Kole Shettima is the African Regional Director of the MacArthur Foundation's and Co-Director of the On Nigeria Big Bet. Earlier at the Foundation, he was responsible for grantmaking in Population & Reproductive Health, Girls Secondary Education, Human Rights and International Justice, and the Partnership for Higher Education in Africa. Prior to joining the Foundation in 1999, Shettima taught at the University of Maiduguri, the University of Toronto, and at Ohio University. He volunteered for several organizations including the Inter-Church Coalition on Africa, Women In Nigeria, and Machina Emirate Development Association. He has published in several academic journals including Africa Development, Review of African Political Economy, African Studies Review, and Journal of Asian and African Studies. Dr. Shettima has a PhD from the University of Toronto, a Master's degree from Ahmadu Bello University in Zaria and undergraduate degree from the University of Maiduguri. He sits on the board of several organizations including the JAIZ Charity and Development Foundation and Sir Ahmadu Bello Memorial Foundation, among others.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         <Image
          src={Kole}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    name: "Dr Yashua Alkali Hamza PhD. ",
    title: "Member Board of Directors ",
    
    description:
      "Yashua is a Pediatrician and Public Health expert with vast experience in the areas of Public Health Policy, Qualitative Research and Hospital Administration. She works with various agencies, national and international NGOs, and Public Health Institutions. Yashua has worked with other organizations like the Harvard School of Public health and the New York University Research Centre for Leadership in Action (NYU RCLA), the London School of Hygiene and Tropical Medicine (LSHTM), the Institute of International Education (IIE), and the Common Heritage Foundation. She is also the chief medical editor of the Holistic and Wellness website https://familyhealthadvocacy.com. She has pioneered, led, and supervised various projects focused on improving the lives and health of women and children using innovative and groundbreaking techniques and is also a certified Life Coach and Cognitive Behavioral Therapist offering life coaching and talk therapy at her private facility.  Yashua is a co-founder of Family Included (https://familyincluded.com), and a member of several national and international associations. She is a Fellow of the West African College of Physicians (FWACP) and the Institute of Management Consultants (FIMC) and has a Master of Public Health degree from the University of Liverpool, United Kingdom, and a Ph.D. in Public Health from Walden University, United States. She is the Founder and Chief Executive Officer of Childcare and Wellness Clinics (www.childcarewellnessclinics.com) a private health facility located in Abuja, Nigeria.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         <Image
          src={Yash}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    name: 'Amina Ahmad K.U Nagogo',
    title: "Member Board of Directors",
    description:
      "Results-driven social entrepreneur with over 10 years working experience in development and management of digital health initiatives. She is the Founder and CEO of Datharm Nigeria Ltd, a company with a passion for developing tools for data driven decision making in the field of public health and education.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
       <Image
          src={Ku}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    name: 'Amina Baba Manu ',
    title: "Member Board of Directors",
    description:
      "Amina Baba Manu has over 20 years of working in the development sector. She has worked for STEP (World Bank Supported NGO) before joining ActionAid Nigeria where she worked in various capacities from program advisor to project manager. Amina has over the years worked with over 500 nascent and growing NGOs by providing technical support, skill development, coaching and mentoring in various technical capacity areas such as organisational assessment and development, proposal writing and fundraising, gender programming, policy and advocacy, strategic planning development, leadership and management, team building, bonding and management, strategy reviews and project review. Currently Amina is an independent social development consultant and has provided services for organisations like Nigeria INGO Forum (PLRCAP), Society for Family Health, Save the Children USA, Plan International, Pathfinder Nigeria, UNICEF, Marie Stopes, Save the Children Nigeria, Enterprise Development Centre (Pan- Atlantic University), Mercy Corps among others.  Amina is dedicated to the localization agenda and has passion for supporting small national NGOs to grow, be sustainable and compete effectively in the funding space.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
       <Image
          src={Amin}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    name: 'Yakubu Jibrin ',
    title: "Member Board of Directors",
    description:
      "Yakubu Jibrin, MBA, BSc (Hons) Accounting, FIMC is a Finance, Human Resource, and Operations Management specialist with about 30 years’ experience, ten of which have been spent at management level in the development sector. He worked full time as Director, Business Operations with Friends for Global Health Initiative in Nigeria (FGHiN) and Friends in Global Health – FGH (an affiliate of Vanderbilt University, Nashville, Tennessee) between 2009 and 2017. Yakubu had also worked with Family Health International/SNR Program and Partnership for Transforming Health Systems (PATHS) between 2005 and 2009 as part his career in the development sector. Yakubu has supported Human Capital Managers (HCM) to conduct an Operational Data Diagnostic Assessment Project in Kano state funded by the Bill and Melinda Gates Foundation. Prior to this engagement, Yakubu had worked with the Presidential Task Force on COVID-19 as a Technical Assistant, Finance to the National Coordinator. Before going into development work, he has worked with MicroAccess Limited as a Manager (Finance and Administration) between 2001 and 2005. He also served with Afri-Projects Consortium (Management Consultants to the Petroleum (Special) Trust Fund in 1996 as an Accounts Officer. He did serve with New Nigeria Development Company, Kaduna in 1995.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
       <Image
          src={Yak}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    name: 'Mohammad Farouk Jega',
    title: "Member Board of Directors, Senior Program Director",
    description:
      "Farouk is an obstetrics and gynecologist and project management expert with over 2 decades of clinical, managerial and leadership roles in the health and development sector. He had served as Country Director of Pathfinder International for Nigeria and Ghana from 2012 to 2020 and Senior Program Director/Regional Director from 2020 to 2022. He holds a medical degree from the University of Jos and a Master of Public Health from Liverpool School of Tropical Medicine.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Jega}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    name: 'Fatima Jika',
    title: "Member Board of Directors",
    description:
      "Seasoned and accomplished financial professional with a strong background in risk management, regulatory leadership, and strategic planning. Proven track record in implementing diverse projects, ensuring regulatory compliance, and collaborating effectively with international development partners, notably the Alliance for Financial Inclusion (AFI). Backed by an academic foundation in International Relations, with a focus on bringing a holistic perspective to the finance field and applying financial expertise to drive sustainable financial solutions and foster positive change.  Fatima holds a Ph.D. in Economics, MA in International Relations, and an MBA, among other qualifications.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Fati}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    name: 'Mike Egboh',
    title: "Member Board of Directors",
    description:
      "A notable figure in the development sector in Nigeria and beyond with over 4 decades of leadership roles in the non-profit, global health and development sector. Mike was Country Director for Pathfinder International for close 2 decades. He also successfully led the PATH II project at the Project Director. More recently, he was the Country Director and Chief of Party for the Chemonics led Global Supply Chain project here in Nigeria. Mike currently mentors and coaches’ development leaders and organizations in the sub-region and globally. He holds a Master of Public Health from the Harvard University, School of public health. He is a recipient of various national and global awards including the prestigious alumni award of the Harvard School of Public Health and US president’s Volunteer Service Award.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Mike}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    name: 'Mohammad Murtala Mai',
    title: "CEO/Secretary, Board of Directors",
    description:
      "Experienced and strategic, international development leader with almost 3 decades of success in managing complex, expansive, global, health and development initiatives focused on improving health and quality of lives of women, young people, and their communities. Murtala spent 22 years in various leadership roles at Pathfinder International including Country Director Nigeria and Ghana (2008-2012), Senior Technical Director Best Practices (2012-2016), Regional Director (2016-2018), Chief of Country and Program Strategy (2018-2020), Chief of Programs (2020-2022) and Executive Vice President 2022-2023). Previously, he was a Senior Consultant at Afri-project Consortium from 1996 to 2000. He had served as Senior Special Assistant Health to the Governor of Adamawa State (2008-2009), and a member and chair of the technical committee board of the National Primary Healthcare Development Agency (2008-2012). He holds a medical degree from Ahmadu Bello University and a Master of Public Health (MPH) and Business Administration (MBA) from the University of Maastricht, Netherlands and the Frankfurt School of Business and Finance respectively.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       <Image
          src={Mai}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function Staff() {
  return (
    <div className="bg-[#0E1729] flex flex-col items-center">
          <div className="mt-5">
            <h1 className="text-align text-white text-4xl font-bold">Our Team</h1>
        </div>
      <div className="w-[80%] mt-10">
      <StickyScroll content={content} />
      </div>
    </div>
  );
}

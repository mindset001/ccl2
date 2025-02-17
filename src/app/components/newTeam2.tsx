'use client'

import { Fragment } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Disclosure, Transition } from '@headlessui/react'
import { Caveat } from 'next/font/google'
import TabImage01 from '../../../public/images/aminach.png'
import TabImage2 from '../../../public/images/jumoke.png'
import TabImage3 from '../../../public/images/kole.png'
import TabImage4 from '../../../public/images/yashaua.png'
import TabImage5 from '../../../public/images/ku.png'
import TabImage6 from '../../../public/images/amin.png'
import TabImage7 from '../../../public/images/yak.png'
import TabImage8 from '../../../public/images/farouq.png'
import TabImage9 from '../../../public/images/fati.png'
import TabImage10 from '../../../public/images/mike2.png'
import TabImage11 from '../../../public/images/mai.png'
import Link from 'next/link'

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap'
})

interface Tab {
  title: string
  img: StaticImageData
  name: string
  description: string
  link: string
}

export default function NewTeam2() {

  const tabs: Tab[] = [
    {
        name: "Amina Bala Zakari",
        title: "Chair Board of Directors ",
        img: TabImage01,
        description: "Amina is a pharmacist and health and social sector development expert with extensive experience in policy and strategic development, program design, management, and evaluation. She has 10 years of experience at the Independent National Electoral Commission, where she served as national commissioner in various capacities, including acting Chairperson. She has also held roles such as Secretary of Health and Human Services and Secretary of Social Development in the Federal Capital Territory Administration. Additionally, she was a Senior Consultant at Afri-project Consortium. Amina serves on several boards, including the Albino Foundation of Nigeria and Reach Care Multi-Services Nigeria Ltd.",
        link: ''
    },
      {
          name: 'Olajumoke Azogu,',
          title: "Member Board of Directors",
          description: "Jumoke holds a Ph.D. (Information Science) with about 15 years experience in Monitoring and Evaluation of Public Health programs, 9 years of which involve technical and team leadership. Currently the MEL Director with Palladium International for the USAID Integrated Health Program (IHP), a $225M USAID Nigeria-funded Reproductive, Maternal, Newborn, Child Health and Nutrition, and Malaria (RMNCH+NM) program for Health Systems Strengthening and Health Financing, where she provides strategic guidance and technical leadership, vision and management, capacity strengthening for MEL activities, working with National and State partners.",
          img: TabImage2,
          link: 'https://www.linkedin.com/in/olajumokeazogu?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BdI58avlTRKus5AOdq5YjQ%3D%3D'
      },
 
      {
          name: "Dr Yashua Alkali Hamza PhD. ",
          title: "Member Board of Directors ",

          description: "Yashua is a Pediatrician and Public Health expert with extensive experience in Public Health Policy, Qualitative Research, and Hospital Administration. She collaborates with various agencies and institutions, including Harvard School of Public Health and NYU RCLA. She is the chief medical editor of the Holistic and Wellness website and co-founder of Family Included. Yashua has led numerous projects to improve women's and children's health, and she offers life coaching and therapy at her private facility. She holds a Master of Public Health from the University of Liverpool and a Ph.D. in Public Health from Walden University. Yashua is the Founder and CEO of Childcare and Wellness Clinics in Abuja, Nigeria.",
          img: TabImage4,
          link: 'https://www.linkedin.com/in/yashua-alkali-hamza-phd672b6515?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZ5xOqA05R3emPXin5L8LwA%3D%3D'
      },
      {
          name: 'Amina Ahmad K.U Nagogo',
          title: "Member Board of Directors",
          description: "Results-driven social entrepreneur with over 10 years working experience in development and management of digital health initiatives. She is the Founder and CEO of Datharm Nigeria Ltd, a company with a passion for developing tools for data driven decision making in the field of public health and education.",
          img: TabImage5,
          link: 'https://www.linkedin.com/in/amina-ahmad-k-u-nagogo-63270733?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4Y4cY%2Fr1SruDxnTdCtWsTg%3D%3D'
      },
    

     
      {
        name: "Kole Shettima PhD",
        title: "Member Board of Directors ",

        description: "Kole Shettima is the African Regional Director of the MacArthur Foundation and Co-Director of the On Nigeria Big Bet. He has managed grantmaking in various sectors, including Population & Reproductive Health and Human Rights. Before joining the Foundation in 1999, Shettima taught at several universities and volunteered for numerous organizations. He has published in various academic journals and holds a PhD from the University of Toronto, a Master's from Ahmadu Bello University, and an undergraduate degree from the University of Maiduguri. He serves on the boards of several organizations, including the JAIZ Charity and Development Foundation and the Sir Ahmadu Bello Memorial Foundation",
        img: TabImage3,
        link: 'https://www.linkedin.com/in/kole-shettima-1b500752?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4PgZx2vAQP284JPBGBOG0w%3D%3D'
    },
      {
          name: 'Fatima Jika',
          title: "Member Board of Directors",
          description: "Seasoned and accomplished financial professional with a strong background in risk management, regulatory leadership, and strategic planning. Proven track record in implementing diverse projects, ensuring regulatory compliance, and collaborating effectively with international development partners, notably the Alliance for Financial Inclusion (AFI). Backed by an academic foundation in International Relations, with a focus on bringing a holistic perspective to the finance field and applying financial expertise to drive sustainable financial solutions and foster positive change.  Fatima holds a Ph.D. in Economics, MA in International Relations, and an MBA, among other qualifications.",
          img: TabImage9,
          link: 'https://www.linkedin.com/in/fatima-jika-5a7ba8a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5ka8kQ4rSdq0%2BJFEkSWaAw%3D%3D'
      },
      {
          name: 'Mike Egboh',
          title: "Member Board of Directors",
          description: "A notable figure in the development sector in Nigeria and beyond with over 4 decades of leadership roles in the non-profit, global health and development sector. Mike was Country Director for Pathfinder International for close 2 decades. He also successfully led the PATH II project at the Project Director. More recently, he was the Country Director and Chief of Party for the Chemonics led Global Supply Chain project here in Nigeria. Mike currently mentors and coaches’ development leaders and organizations in the sub-region and globally. He holds a Master of Public Health from the Harvard University, School of public health. He is a recipient of various national and global awards including the prestigious alumni award of the Harvard School of Public Health and US president’s Volunteer Service Award.",
          img: TabImage10,
          link: 'https://www.linkedin.com/in/deacon-mike-egboh-b2115411?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B1xCVpQ%2BOTSqyECviMyIlGw%3D%3D'
      },
      {
        name: 'Mohammad Farouk Jega',
        title: "Senior Program Director/Member Board of Directors",
        description: "Farouk is an obstetrics and gynecologist and project management expert with over 2 decades of clinical, managerial and leadership roles in the health and development sector. He had served as Country Director of Pathfinder International for Nigeria and Ghana from 2012 to 2020 and Senior Program Director/Regional Director from 2020 to 2022. He holds a medical degree from the University of Jos and a Master of Public Health from Liverpool School of Tropical Medicine.",
        img: TabImage8,
        link: 'https://www.linkedin.com/in/dr-farouk-jega-65090234?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6xPp3dT1SKyZzMVoHP4XTQ%3D%3D'
    },
      {
          name: 'Mohammad Murtala Mai',
          title: "CEO/Secretary, Board of Directors",
          description: "Murtala is an experienced international development leader with nearly 30 years of success in managing global health and development initiatives. He spent 22 years in various leadership roles at Pathfinder International, including Country Director for Nigeria and Ghana, Senior Technical Director Best Practices, Regional Director, Chief of Country and Program Strategy, Chief of Programs, and Executive Vice President. Previously, he was a Senior Consultant at Afri-project Consortium and served as Senior Special Assistant Health to the Governor of Adamawa State. He also chaired the technical committee board of the National Primary Healthcare Development Agency. Murtala holds a medical degree from Ahmadu Bello University, an MPH from the University of Maastricht, and an MBA from the Frankfurt School of Business and Finance.",
          img: TabImage11,
          link: 'https://www.linkedin.com/in/murtalamai?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUNLi3v0bSQW27ifeIeSSBA%3D%3D'
      },
    
  ]

  return (
    <main className='mt-10 flex flex-col justify-center items-center'>
      <div>
        <h1 className="text-center text-black text-4xl font-bold mt-10 mb-4">Board Of Directors</h1>
      </div>
      <div className='w-[80%]'>
        {tabs.map((tab, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 mb-2 text-sm font-medium text-left text-white bg-[#0E1729] rounded-lg hover:bg-blue-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{tab.name}</span>
                  <svg
                    className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-white`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel static className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-gray-100 rounded-lg">
                    <div className='flex flex-col lg:flex-row'>
                      <figure className="min-[480px]:w-1/2 p-2">
                        <Image className="w-full h-[180px] min-[480px]:h-full object-cover rounded-lg" width="304" height="214" src={tab.img} alt={tab.title} />
                      </figure>
                      <div className="lg:w-1/2 flex flex-col justify-center p-5 pl-3">
                        <div className="flex justify-between mb-1">
                          <header>
                            <div className="font-caveat text-xl font-medium text-sky-500">{tab.name}</div>
                            <h1 className="text-xl font-bold text-slate-900">{tab.title}</h1>
                          </header>
                        </div>
                        <div className="text-slate-500 text-sm mb-2">{tab.description}</div>
                        
                        <Link href={tab.link}><div><Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/437px-LinkedIn_Logo.svg.png?20170711102837' alt='' width={300} height={300} className='w-[100px] h-[] underline border-b border-[blue]'/></div></Link>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </main>
  )
}

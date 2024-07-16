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

export default function TeachTeam2() {

    const tabs: Tab[] = [
  
    
     
        {
            name: 'Amina Baba Manu ',
            title: "Member Board of Directors",
            description: "Amina Baba Manu has over 20 years of experience in the development sector, working with organizations like STEP and ActionAid Nigeria in various capacities. She has supported over 500 NGOs with technical assistance, skill development, and mentoring in areas such as organizational development, fundraising, and strategic planning. Currently an independent consultant, Amina collaborates with multiple organizations, including UNICEF and Save the Children. She is dedicated to helping small national NGOs grow and become sustainable.",
            img: TabImage6,
            link: ''
        },
        {
            name: 'Yakubu Jibrin ',
            title: "Member Board of Directors",
            description: "Yakubu Jibrin, MBA, BSc (Hons) Accounting, FIMC, is a specialist in Finance, Human Resource, and Operations Management with nearly 30 years of experience, including 10 years in management roles within the development sector. He served as Director of Business Operations at Friends for Global Health Initiative and Friends in Global Health from 2009 to 2017. He previously worked with Family Health International and Partnership for Transforming Health Systems from 2005 to 2009, and supported a Bill and Melinda Gates Foundation project in Kano. He also served as a Technical Assistant in Finance for the Presidential Task Force on COVID-19. Before entering the development sector, he held finance and administration roles at MicroAccess Limited, Afri-Projects Consortium, and New Nigeria Development Company.",
            img: TabImage7,
            link: ''
        },
        {
          name: 'Fatima Mohammed',
          title: "",
          description: "A motivated, adaptable and responsible public health practitioner, passionate about women’s health and the health and welfare of poor and vulnerable persons. She served the Kaduna state government as Midwife Educator for over 10 years rising to the position of a Deputy Director. She has strong drive to see things through to completion while being methodical and client/beneficiary focused, participatory approach for decision making and inclusive programme delivery. Fatima has over 15 years’ experience in development work and has overseen the start-off and implementation of seven (7) Maternal, Newborn, Child Health and Family Planning programs.",
          img: '',
          link: ''
      },
      {
          name: 'Muhammad Saddiq',
          title: "",
          description: "Dr Muhammad Saddiq holds an MBBS from Ahmadu Bello University Zaria, an MPH and a PhD in health systems research from University of Sheffield, UK, with a career spanning over 20 years across government, the World Health Organisation (WHO), and academia. His current roles are Deputy Director of Public Health and Senior University Teacher in Health Services, Systems & Management at Division of Population Health, School of Medicine and Population Health, University of Sheffield a world-leading UK health research institution. Dr Saddiq previously served as WHO’s National Professional Officer (Malaria) for Nigeria, aiding West African countries in planning, conducting, and evaluating malaria control and other public health interventions. Most recently, he served as the Chair of the Health Information System subcommittee of the Presidential Health Sector Reform Committee leading the development of the digitization plan for the health systems in Nigeria.",
          img: '',
          link: ''
      },
      {
          name: 'Azeez Oseni ',
          title: "",
          description: "Public health physician and international development specialist with 16+ years of experience in development and humanitarian programs, with a specific technical focus on public health, food security, and nutrition. Extensive international experience in 15+ countries across Sub-Saharan Africa. Held senior technical and management positions including serving as chief of party, director, advisor, and manager for top rated international development organizations. Significant consulting experience and current Executive Director of Revive the Future (RTF) and Health, Agriculture, and Nutrition for Development (HAND). Strong research background with involvement in over 20 studies. Experience in youth, gender and child-oriented programming. Holds qualifications in Medicine, Public Health, and Project Management, with technical competencies in nutrition, health systems strengthening, health service delivery, food security, livelihoods, and resilience. Experience working with a diverse range of international donors including USAID, USDA, OFDA, DFID/FCDO, Global Fund, ECHO, EU, KfW, Sweden, Canada, Aliko Dangote Foundation, Bill and Melinda Gates Foundation, and PEPFAR. Direct country experience in Nigeria, South Sudan, Sierra Leone, and the USA, and indirect experience in Zambia, Zimbabwe, Malawi, Madagascar, South Africa, Lesotho, and Mozambique.",
          img: '',
          link: ''
      },
     
     
      {
          name: 'Mohammad Farouk Jega',
          title: "Senior Program Director/Member Board of Directors",
          description: "Farouk is an obstetrics and gynecologist and project management expert with over 2 decades of clinical, managerial and leadership roles in the health and development sector. He had served as Country Director of Pathfinder International for Nigeria and Ghana from 2012 to 2020 and Senior Program Director/Regional Director from 2020 to 2022. He holds a medical degree from the University of Jos and a Master of Public Health from Liverpool School of Tropical Medicine.",
          img: TabImage8,
          link: ''
      },
      
    ]

  return (
    <main className='mt-10 flex flex-col justify-center items-center'>
      <div>
        <h1 className="text-center text-black text-4xl font-bold mt-10 mb-4">Our Technical Team</h1>
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

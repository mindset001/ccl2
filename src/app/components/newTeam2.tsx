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

export default function NewTeam2() {

  const tabs: Tab[] = [
    {
      name: "Amina Bala Zakari",
      title: "Chair Board of Directors",
      img: TabImage01,
      description: "Amina is a pharmacist and a health and social sector development expert with a wealth of experience...",
      link: ''
    },
    {
      name: 'Olajumoke Azogu,',
      title: "Member Board of Directors",
      description: "Jumoke holds a Ph.D. (Information Science) with about 15 years experience in Monitoring and Evaluation of Public Health programs...",
      img: TabImage2,
      link: ''
    },
    {
      name: "Kole Shettima PhD",
      title: "Member Board of Directors",
      description: "Kole Shettima is the African Regional Director of the MacArthur Foundation's and Co-Director of the On Nigeria Big Bet...",
      img: TabImage3,
      link: ''
    },
    {
      name: "Dr Yashua Alkali Hamza PhD.",
      title: "Member Board of Directors",
      description: "Yashua is a Pediatrician and Public Health expert with vast experience in the areas of Public Health Policy, Qualitative Research and Hospital Administration...",
      img: TabImage4,
      link: ''
    },
    {
      name: 'Amina Ahmad K.U Nagogo',
      title: "Member Board of Directors",
      description: "Results-driven social entrepreneur with over 10 years working experience in development and management of digital health initiatives...",
      img: TabImage5,
      link: ''
    },
    {
      name: 'Amina Baba Manu',
      title: "Member Board of Directors",
      description: "Amina Baba Manu has over 20 years of working in the development sector...",
      img: TabImage6,
      link: ''
    },
    {
      name: 'Yakubu Jibrin',
      title: "Member Board of Directors",
      description: "Yakubu Jibrin, MBA, BSc (Hons) Accounting, FIMC is a Finance, Human Resource, and Operations Management specialist with about 30 years’ experience...",
      img: TabImage7,
      link: ''
    },
    {
      name: 'Mohammad Farouk Jega',
      title: "Member Board of Directors, Senior Program Director",
      description: "Farouk is an obstetrics and gynecologist and project management expert with over 2 decades of clinical, managerial and leadership roles in the health and development sector...",
      img: TabImage8,
      link: ''
    },
    {
      name: 'Fatima Jika',
      title: "Member Board of Directors",
      description: "Seasoned and accomplished financial professional with a strong background in risk management, regulatory leadership, and strategic planning...",
      img: TabImage9,
      link: ''
    },
    {
      name: 'Mike Egboh',
      title: "Member Board of Directors",
      description: "A notable figure in the development sector in Nigeria and beyond with over 4 decades of leadership roles in the non-profit, global health and development sector...",
      img: TabImage10,
      link: ''
    },
    {
      name: 'Mohammad Murtala Mai',
      title: "CEO/Secretary, Board of Directors",
      description: "Experienced and strategic, international development leader with almost 3 decades of success in managing complex, expansive, global, health and development initiatives...",
      img: TabImage11,
      link: ''
    }
  ]

  return (
    <main className='mt-10 flex flex-col justify-center items-center'>
      <div>
        <h1 className="text-center text-black text-4xl font-bold mt-10 mb-4">Our Team</h1>
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

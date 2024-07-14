'use client'

import { Fragment } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Tab } from '@headlessui/react'
import { Caveat } from 'next/font/google'
import TabImage01 from '../../../public/images/farouq.png'
import Tab0Image2 from '../../../public/images/farouq.png'
import Tab0Image3 from '../../../public/images/farouq.png'

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap'
})

interface Tab {
  title: string
  img: StaticImageData
  tag: string
  excerpt: string
  link: string
}

export default function UnconventionalTabs() {

  const tabs: Tab[] = [
    {
      title: 'Who We are',
      img: TabImage01,
      tag: 'Mountain',
      excerpt: "Capacity Connect Ltd (CCL) is a consultancy service provider that excels in the area of development and humanitarian assistance and non-profit management. We serve development and humanitarian organizations as well as public sector institutions globally to deliver people centered and locally led development solutions. We see ourselves not just as a consulting company, but part of a movement that connects stakeholders and enhance their capacity to catalyze and advance a more equitable, and sustainable world.",
      link: '#0'
    },
    {
      title: 'Our Story',
      img: Tab0Image2,
      tag: 'Mountain',
      excerpt: "We are a group of development leaders privileged to have straddled the local-global development and humanitarian space, having led teams at national and global levels to deliver development interventions for many decades and across many countries around the world. We, along with many practitioners and academics in the field are disillusioned with current models of development and have decided to bring our wealth of experience and insights to complement local ingenuity to try out more locally led, sustainable and equitable development models to respond to our more complex and inequitable world.",
      link: '#0'
    },
    // {
    //   title: 'What We Do',
    //   img: Tab0Image3,
    //   tag: 'Mountain',
    //   excerpt: "Capacity Connect Ltd (CCL) is a consultancy service provider that excels in the area of development and humanitarian assistance and non-profit management. We serve development and humanitarian organizations as well as public sector institutions globally to deliver people centered and locally led development solutions. Capacity Connect is not just a consulting company, it is a movement that brings stakeholders together to catalyze and advance a more equitable, and sustainable world.",
    //   link: '#0'
    // },
    {
        title: 'Our Mission',
        img: Tab0Image2,
        tag: 'Mountain',
        excerpt: "Our mission is to leverage our expansive local and global expertise to enhance capacity and foster connections for sustainable development.",
        link: '#0'
      },
      {
        title: 'Our Vision',
        img: Tab0Image3,
        tag: 'Mountain',
        excerpt: "We envision a world where communities everywhere are enabled to lead and achieve their development aspirations.",
        link: '#0'
      },
  ]

  return (
    <main className=''>
        <Tab.Group>
      {({ selectedIndex }) => (
        <div className={`${caveat.variable}`}>
          {/* Buttons */}
          <div className="flex justify-center">
            <Tab.List className="w-[60%] inline-flex flex-wrap justify-center bg-slate-200 rounded-[20px] p-1 mb-8 min-[480px]:mb-12">
              {tabs.map((tab, index) => (
                <Tab key={index} as={Fragment}>
                  <button
                    className={`flex-1 text-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${selectedIndex === index ? 'bg-white text-slate-900' : 'text-slate-600 hover:text-slate-900'}}`}>{tab.title}</button>
                </Tab>
              ))}
            </Tab.List>
          </div>

          {/* Tab panels */}
          <Tab.Panels className="flex justify-center ">
            <div className="flex flex-col w-[60%] ">

              {tabs.map((tab, index) => (
                <Tab.Panel
                  key={index}
                  as={Fragment}
                >
                  <article className="bg-[#0E1729] rounded-2xl shadow-xl flex focus-visible:outline-none focus-visible:ring">
                    
                    <div className=" flex flex-col items-center justify-center p-5 pl-3">
                      <div className="flex justify-between mb-1">
                        <header>
                          <h1 className="text-xl font-bold text-white">{tab.title}</h1>
                        </header>
                     
                      </div>
                      <div className="text-white text-sm line-clamp-3 mb-2 p-4">{tab.excerpt}</div>
                    
                    </div>
                  </article>
                </Tab.Panel>
              ))}

            </div>
          </Tab.Panels>
        </div>
      )}
    </Tab.Group>
    </main>
  )
}
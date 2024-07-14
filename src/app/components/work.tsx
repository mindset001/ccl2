import { HoverEffect } from '@/components/ui/card-hover-effect';
import dynamic from 'next/dynamic';
import React from 'react'


function Work() {
   
  return (
   <main  className="w-full flex flex-col justify-center items-center px-8 my-20">
    <div  className="w-[90%] flex flex-col items-center">
    

    <div className='flex flex-col items-center justify-center '>
        <div className=' w-full flex flex-row justify-center items-center'>
        

           <div className='hidden w-full lg:w-[80%] lg:text-justify bg-[#0E1729]  p-6 mt-2 rounded-[20px] lg:flex flex-col gap-2'>
           <h1 className="mb-2 text-center  text-4xl font-[500] text-white  mt-6 capitalize">Why work with us</h1>
           <div className='lg:p-8'>

           <p className='text-[#fff]'>Capacity Connect is a Nigeria based consulting firm committed to enhancing capacity and fostering connections for sustainable development globally and especially in developing countries. We have deep local knowledge and expansive global view and network that provides the right setting for local solutions informed by global best practices. We know what local and global stakeholders require from each other and are well positioned to bridge the divide effectively, respectfully and with maximum impact. </p>
            <p className='text-[#fff]'>Our project management and social sectoral expertise coupled with effective inclusive approaches, access to extensive resources across a diverse sector, incredible passion for social impact and a deep culture of service and professionalism qualifies us to be your partner for delivering sustainable development and humanitarian interventions. </p>
            <p className='text-[#fff]'>We provide you and your partners access to in-house experts and a network of local and international professionals to get you the results you need, enhance capacities, and foster lifelong connections for sustainable development.</p>
            <p className='text-[#fff]'>We emphasis integrity and collaboration in every stage of our engagement, ensuring that all your requirements are prioritized, and all your expectations are met and exceeded. </p>
       
           </div>
           </div>
        </div>
        
    </div>
    </div>
   </main>
  )
}

export default Work
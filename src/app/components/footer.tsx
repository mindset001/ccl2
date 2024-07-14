'use client'

import React, { useEffect, useState } from 'react'
import Logo from '../../../public/images/log.png'
import Twitter from '../../../public/images/twitter.png'
import Linkedln from '../../../public/images/linkedln.png'
import Instagram from '../../../public/images/instagram.png'
import Image from 'next/image'
function Footer() {

    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
    }, []);
    return (
        <main className='bg-black px-10 mt-10'>
            <div className='flex flex-col md:flex-row justify-between items-center mb-4'>
                <div>
                    <Image src={Logo} alt='' className='w-20'/>
                    {/* <h1>Capacity Connect</h1> */}
                </div>
                <div className='flex flex-col md:flex-row items-center gap-2'>
                    <p className='text-[18px] text-white'>Follow Us On Social Media</p>
                    <div className='flex gap-2'>
                        <Image src={Linkedln} alt=''/>
                        <Image src={Instagram} alt=''/>
                        <Image src={Twitter} alt=''/>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

            {/* <div className='border-t border-[#808080] flex flex-col md:flex-row text-white'>
                <div className='mr-10'>
                    <div>
                        <h2 className='mt-4 text-[16px] font-[600]'>Home</h2>
                        <ul className='text-[#808080] text-[14px] mt-6 font-[400] flex flex-col gap-2'>
                            <li>Benefits</li>
                            <li>Our Testimonials</li>
                            <li>Partners</li>
                        </ul>
                    </div>
                </div>

                <div className='mr-10'>
                    <div>
                        <h2 className='mt-4 text-[16px] font-[600]'>Services</h2>
                        <ul className='text-[#808080] text-[14px] mt-6 font-[400] flex flex-col gap-2'>
                            <li>Web Design</li>
                            <li>Website Development</li>
                            <li>App Development</li>
                            <li>Digital Marketing</li>
                        </ul>
                    </div>
                </div>

                <div className='mr-10'>
                    <div>
                        <h2 className='mt-4 text-[16px] font-[600]'>Projects</h2>
                        <ul className='text-[#808080] text-[14px] mt-6 font-[400] tracking-wide flex flex-col gap-2'>
                            <li>ABC Tech Solutions</li>
                            <li>GreenEarth Eco Store</li>
                            <li>HealthTech Innovations</li>
                            <li>GlobalTech Solutions</li>
                            <li>TechGuru Inc.</li>
                        </ul>
                    </div>
                </div>

                <div className='mr-10'>
                    <div>
                        <h2 className='mt-4 text-[16px] font-[600]'>About Us</h2>
                        <ul className='text-[#808080] text-[14px] mt-6 font-[400] flex flex-col gap-2'>
                            <li>Our Team</li>
                            <li>Achievements</li>
                            <li>Awards</li>
                        </ul>
                    </div>
                </div>

                <div className='mr-10'>
                    <div>
                        <h2 className='mt-4 text-[16px] font-[600]'>Careers</h2>
                        <ul className='text-[#808080] text-[14px] mt-6 font-[400]'>
                            <li>Job Openings</li>
                            <li>Benefits & Perks</li>
                            <li>Employee Refral</li>
                        </ul>
                    </div>
                </div>

                <div className='mr-4'>
                    <div>
                        <h2 className='mt-4 text-[16px] font-[600]'>Blogs</h2>
                        <ul className='text-[#808080] text-[14px] mt-6 font-[400] tracking-wide'>
                            <li>Our Blogs</li>
                        </ul>
                    </div>
                </div>
            </div> */}

            <div className='border-t border-[#808080] my-4 py-4 flex flex-col md:flex-row justify-between'>
                <p className=' text-[#808080] font-[400] text-[14px]'>Powered By <span className='text-white'>Capacity Connect</span> © <span>{`${year} All Rights reserved.`}</span> </p>
                {/* <p className='text-[#808080]'>Version 2.0</p> */}
                <div>
                    <ul className='flex flex-col md:flex-row gap-4 text-[#808080] font-[400] text-[14px]'>
                        <li><span className='text-white'>Office Address: </span>Suite B4, 72-Hub 
No. 72 Yakubu Gowon Crescent,
Asokoro- Abuja</li>
                        {/* <li>Terms & Conditions</li>
                        <li>Cookie Policy</li> */}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Footer
'use client'
import React, { useState } from 'react'
import Logo from '../../../public/images/log.png'
import Image from 'next/image';
import Link from 'next/link';

function Header() {
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(true)

    const handleShow = () => {
        setShow(true)
        setHide(false)
    }
    const handleHide = () => {
        setShow(false)
        setHide(true)
    }
    return (
        <main className=''>
            <div className="bg-[#0F162A] flex items-center w-full justify-between p-4">
                <Image src={Logo} alt='' className='w-20'/>
                {/* <h1>Capacity Connect</h1> */}
                <div className='hidden md:block'>
                    <ul className='flex flex-row text-[14px] text-white  font-[400] px-4 gap-3'>
                        {Navcontent.map((item, i: number) => (
                            <li className='active:bg-[white] active:text-black active:rounded-[20px] active:p-2'><Link href={item.link}>{item.name}</Link></li>
                        ))}

                    </ul>
                </div>
                <div className='block md:hidden'>
                    {hide && <div className='mr-4 mt-4' onClick={handleShow}>
                        <div className='w-[20px] h-[1px] bg-white'></div>
                        <div className='w-[20px] h-[1px] bg-white my-2'></div>
                        <div className='w-[20px] h-[1px] bg-white'></div>
                    </div>}
                    {show && <div className='' onClick={handleHide}>
                            <h1 className='text-[34px] font-[800]'>X</h1>
                        </div>}

                    {show && <div className='px-4 py-2 w-[70%] h-[40vh] ml-[-70%] z-50 absolute bg-white text-black flex justify-between'>

                        <ul className='flex flex-col text-[16px] font-[400] font-[700] px-4 gap-3'>
                            {Navcontent.map((item, i: number) => (
                                <li><Link href={item.link}>{item.name}</Link></li>
                            ))}

                        </ul>

                        
                    </div>}
                </div>
            </div>
        </main>
    )
}

export default Header

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
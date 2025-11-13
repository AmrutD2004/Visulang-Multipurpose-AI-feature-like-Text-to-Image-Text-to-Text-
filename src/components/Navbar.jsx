import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const links = [
        {
            title: 'Home',
            url: '/',

        },
        {
            title: 'ImageGEN',
            url: '/image-generator',
        },
        {
            title: 'TextToSpeech',
            url: '/text-to-speech',
        },

    ]
    return (
        <div className="relative">
            <div className='flex justify-between items-center px-4 py-4 mx-auto md:mt-4 rounded-md border border-neutral-300 shadow-md relative'>
                <div>
                    <h2 className='font-medium tracking-tight, leading-tight  italic text-2xl text-shadow-lg text-neutral-800 ms-8'>VisuLang</h2>
                </div>
                <div className='md:flex items-center gap-4 text-neutral-600 group hidden me-8'>
                    {links.map((links, idx) => (
                        <Link className='hover:text-neutral-900 transition duration-200' to={links.url}>{links.title}</Link>
                    ))}
                </div>
                <button onClick={() => setOpen(!open)} className='md:hidden items-center justify-center'><FaBars /></button>
                <div className='inset-x-0 shadow-md absolute top-20 max-w-2xl mx-auto'>
                    {open && (
                        <div className='flex flex-col top-10 mx-auto items-center gap-4 text-neutral-600 p-4'>
                            {links.map((links, idx) => (
                                <Link className='hover:text-neutral-900 transition duration-200' to={links.url}>{links.title}</Link>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Navbar

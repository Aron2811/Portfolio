import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {

    const [open, setOpen] = useState(false);

    const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contacts', path: '/contact' }
  ]


   

    
  return (
    <header className='bg-[#1C1C1F]/80 shadow-md sticky top-0 z-50'>
      
      <div className=' w-full flex items-center justify-between px-6 py-4'>
        
        {/*Left side*/}
        <div className='flex items-center lg:ml-12 whitespace-nowrap'>
            <span className='text-3xl font-bold text-white'>
                John Aron
            </span>
        </div>

        {/*Desktop nav side*/}
        <nav className='hidden lg:flex  space-x-24 mr-32'>
            {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-[width] after:duration-300 hover:after:w-full" > {link.name} </Link>
            ))}
        </nav>

        {/* Hamburger icon (mobile & tablet) */}

        <button className='lg:hidden text-white focus:outline-none' onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28}/>}
        </button>
      </div>

      {/*Mobile Dropdown*/}
      {open && (
        <div className='lg:hidden bg-[#1C1C1F]/10 text-white flex flex-col items-center space-y-6 py-6'>
            {navLinks.map((link) => (
                <Link key={link.name} to={link.path} onClick={() => setOpen(false)}>
                    {link.name}
                </Link>
            ))}
        </div>
      )}
    </header>
  )
}

export default Header

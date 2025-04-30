import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = ['Home', 'Matches', 'Players', 'Gallery', 'Contact']

  return (
    <nav className="bg-green-700 text-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wider">🏏 Cric</Link>
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <ul className={`md:flex gap-6 ${open ? 'absolute top-full left-0 w-full bg-green-700 flex flex-col px-4 py-2' : 'hidden'} md:block`}>
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                className="block py-2 md:inline hover:text-yellow-300 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

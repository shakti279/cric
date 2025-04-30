import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white text-center p-4 mt-10">
      <p>&copy; {new Date().getFullYear()} CricketClub. All rights reserved.</p>
    </footer>
  )
}

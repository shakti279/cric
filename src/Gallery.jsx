import React from 'react'

export default function Gallery() {
  const cricketers = [
    { name: 'Virat Kohli', image: 'https://im.rediff.com/cricket/2022/sep/08vk.gif' },
    { name: 'Rohit Sharma', image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/rohit-sharma-131403815-1x1_0.jpg?VersionId=HqiqXF3v93KyhiUD4JWFfFsmqvBLhSo8' },
    { name: 'Jasprit Bumrah', image: 'https://images.augustman.com/wp-content/uploads/sites/6/2024/03/01160931/401507128_844950213991268_5311943212388641599_n.jpg' },
    { name: 'Hardik Pandya', image: 'https://www.mypunepulse.com/wp-content/uploads/2025/03/hardik.jpeg' },
    { name: 'Kane Williamson', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSnldoFQxjWeEUO40ZdF2TPj8oUcYgEdfk8FnJUQIW-lj27HPHUjmlkIbEwwN_0Mi7dt0-DVotFbOJEhOj4qs9Ovg' },
    { name: 'Steve Smith', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUKMwYKRN8fKs1UZJ4TTrprbpwUS9IWyY_XY6lTefchRKmLBuhE9_qbJ9KPcG5CbZ7dko828fz_w4eUOVd1fO7A' }
  ]

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Gallery</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {cricketers.map((player, i) => (
          <div key={i} className="relative group">
            <img
              src={player.image}
              alt={player.name}
              className="rounded shadow hover:scale-105 transition-all"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-all">
              <h3 className="font-semibold">{player.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

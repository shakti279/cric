import React from 'react'

export default function Highlights() {
  const items = [
    { title: '🏆 State League Champions', desc: 'Victory in 2024 Finals' },
    { title: '🎯 132* by Virat Kohli', desc: 'Man of the Match Performance' },
    { title: '🌟 New Talent Scouted', desc: 'Future stars joining the club' }
  ]

  return (
    <section className="bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Highlights</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

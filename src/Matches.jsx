import React from 'react'

export default function Matches() {
  const matchList = [
    'Mi vs Rcb - April 30',
    'Rcb vs Dc - May 3',
    'Kkr vs Mi - May 7',
  ]

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Upcoming Matches</h2>
      <ul className="space-y-4">
        {matchList.map((match, i) => (
          <li key={i} className="bg-white p-4 shadow rounded">{match}</li>
        ))}
      </ul>
    </div>
  )
}

import React from 'react'

export default function Hero() {
  return (
    <section className="bg-[url('https://t4.ftcdn.net/jpg/04/17/36/11/360_F_417361125_RnrhT3Np0zB0UpeD7QlwuOoyghEGGjBX.jpg')] bg-cover object-cover bg-center text-white p-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Cric</h1>
      <p className="text-xl mb-6">Your destination for cricket passion and excellence.</p>
      <button className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-500 transition">Join Now</button>
    </section>
  )
}

import React from 'react'

export default function Contact() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="space-y-4">
        <input className="w-full border p-3 rounded" type="text" placeholder="Name" />
        <input className="w-full border p-3 rounded" type="email" placeholder="Email" />
        <textarea className="w-full border p-3 rounded" placeholder="Message" rows="5"></textarea>
        <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">Send</button>
      </form>
    </div>
  )
}

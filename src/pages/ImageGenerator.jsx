import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const ImageGenerator = () => {

  const [stateinput, setInput] = useState({ input: '' })
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setInput({ ...stateinput, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stateinput.input.trim()) return
    setLoading(true)

    try {
      // ✅ Pollinations image API
      const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(stateinput.input)}`
      setData(imageUrl)
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-[20vh]" />
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-3xl font-bold">Image Generator</h1>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex items-center gap-4">
          <input
            className="px-4 py-3 border-2 w-full border-black rounded-lg focus:outline-none shadow-md"
            placeholder="Write prompt..."
            type="text"
            name="input"
            onChange={handleChange}
            value={stateinput.input}
          />
          <button className="bg-black text-white px-5 py-3 rounded-lg shadow cursor-pointer">
            Generate
          </button>
        </form>

        {loading && (
          <div className="mt-6 text-center text-lg text-neutral-600">
            Loading...
          </div>
        )}

        {data && (
          <div className="mt-8 flex justify-center">
            <img src={data} alt="Generated" className="rounded-lg shadow-lg w-[400px]" />
          </div>
        )}
      </div>
    </>
  )
}

export default ImageGenerator

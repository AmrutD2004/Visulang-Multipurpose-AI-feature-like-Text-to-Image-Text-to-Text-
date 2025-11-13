import { useState } from 'react'
import axios from 'axios'
import {BrowserRouter ,Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ImageGenerator from './pages/ImageGenerator'
import TextToSpeech from './pages/TextToSpeech'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/image-generator" element={<ImageGenerator />} />
      <Route path="/text-to-speech" element={<TextToSpeech />} />
    </Routes>
    </BrowserRouter>
  )
}

  export default App

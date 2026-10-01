import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import SmoothScroll from "./components/SmoothScroll"

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <SmoothScroll>
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} />}
        />

        <Route path="/projects" element={<Projects darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </SmoothScroll>

      <Footer darkMode = {darkMode} />
    </div>
  )
}

export default App
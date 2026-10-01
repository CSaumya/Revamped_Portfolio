import { useEffect, useState } from "react"
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence, motion } from "motion/react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import SmoothScroll from "./components/SmoothScroll"
import LoadingScreen from "./components/LoadingScreen"

import Dark from "./assets/dark_bg.png"
import Light from "./assets/light_bg.jpg"
import Me from "./assets/Me.png"
import Sunflower from "./assets/Modern_Acrylic_Sunflower_Painting-removebg-preview.png"

const imagesToPreload = [
  Dark,
  Light,
  Me,
  Sunflower,
]

const App = () => {
const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem("theme")
  return savedTheme ? savedTheme === "dark" : true
})
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [minTimeElapsed, setMinTimeElapsed] = useState(false)

  useEffect(() => {
  localStorage.setItem("theme", darkMode ? "dark" : "light")

  document.documentElement.classList.toggle("light", !darkMode)
}, [darkMode])

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let cancelled = false

    const preloadImages = async () => {
      await Promise.all(
        imagesToPreload.map(
          (src) =>
            new Promise<void>((resolve) => {
              const img = new Image()

              img.onload = () => resolve()
              img.onerror = () => resolve()
              img.src = src

              if (img.complete) resolve()
            })
        )
      )

      if (!cancelled) {
        setImagesLoaded(true)
      }
    }

    preloadImages()

    return () => {
      cancelled = true
    }
  }, [])

  const isLoading = !imagesLoaded || !minTimeElapsed

  return (
    <>
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

            <Route
              path="/projects"
              element={<Projects darkMode={darkMode} />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </SmoothScroll>

        <Footer darkMode={darkMode} />
      </div>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading-screen"
            className="fixed inset-0 z-[9999] will-change-transform"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 1.1,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <LoadingScreen darkMode={darkMode} />
          </motion.div>
        )}
      </AnimatePresence>
      <Analytics />
    </>
  )
}

export default App
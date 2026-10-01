import { Eye } from "lucide-react"
import Dark from '../assets/dark_bg.png'
import Light from '../assets/light_bg.jpg'
import Me from '../assets/Me.png'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "motion/react";

type Props = {
  darkMode: boolean
}

const Hero = ({ darkMode }: Props) => {

  const roles = [
    'UI Developer',
    'Full Stack Developer',
    'Software Developer'
  ]

  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % roles.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])
const [visits, setVisits] = useState(0)

useEffect(() => {
  const hasVisited = localStorage.getItem("portfolio-visited")
  const totalVisits = Number(localStorage.getItem("portfolio-visits") || 0)

  if (!hasVisited) {
    const updatedVisits = totalVisits + 1

    localStorage.setItem("portfolio-visits", String(updatedVisits))
    localStorage.setItem("portfolio-visited", "true")

    setVisits(updatedVisits)
  } else {
    setVisits(totalVisits)
  }
}, [])
  return (
    <div className="relative flex w-full flex-col items-center justify-center pt-10">

      <div className="h-[180px] w-[90%] overflow-hidden rounded-3xl sm:h-[240px] sm:w-[80%] md:h-[280px] lg:h-[300px] lg:w-[60%]">
        <img
          src={darkMode ? Dark : Light}
          alt="Hero"
          className="h-full w-full rounded-3xl object-cover"
        />
      </div>

      <div className="absolute -bottom-25 left-[8%] h-[90px] w-[90px] rounded-full border-2 border-amber-900 bg-[var(--accent)] sm:left-[10%] sm:h-[110px] sm:w-[110px] md:left-[15%] md:h-[130px] md:w-[130px] lg:left-62">
        <img
          src={Me}
          alt=""
          className="h-full w-full rounded-full object-cover"
        />
      </div>

<div className="absolute -bottom-12 left-[calc(8%+105px)] right-[20%] flex items-center justify-between gap-2 sm:bottom-12 sm:left-[20%] sm:right-[10%] sm:justify-start sm:gap-4 md:-bottom-10 md:left-[calc(15%+145px)] lg:left-100">
<p className="whitespace-nowrap font-roboto text-xs text-[var(--foreground)] min-[375px]:text-sm sm:text-lg">
  <span className="sm:hidden">Saumya C.</span>
  <span className="hidden sm:inline">Saumya Chaudhary</span>
</p>

  <div className="flex shrink-0 items-center gap-1 whitespace-nowrap text-[10px] text-[var(--muted-foreground)] sm:text-xs">
    <Eye size={13} className="shrink-0" />
    <span>{visits}</span>
  </div>
</div>

      <AnimatePresence mode="wait">
        <motion.h2
          key={roles[roleIdx]}
          initial={{ opacity: 0, filter: "blur(8px)", y: 8 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(8px)", y: -8 }}
          transition={{ duration: 0.8 }}
          className="absolute -bottom-18 left-[calc(8%+105px)] text-[9px] lg:text-[12px] font-medium text-[var(--primary)] sm:left-[calc(12%+125px)] sm:text-[10px] md:left-[calc(15%+145px)] lg:left-100"
        >
          {roles[roleIdx]}
        </motion.h2>
      </AnimatePresence>

      <div className="absolute -bottom-24 left-[calc(8%+105px)] flex items-center gap-1 text-[11px] tracking-wide sm:left-[calc(12%+125px)] sm:text-[12px] md:left-[calc(15%+145px)] md:text-[13px] lg:left-100">
        <p>Varanasi,</p>
        <p>IND</p>
      </div>

    </div>
  )
}

export default Hero

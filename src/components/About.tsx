
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="mt-20 mx-auto w-[95%] px-3 font-sans tracking-wide sm:mt-24 sm:w-[85%] sm:px-5 md:mt-30 md:mb-10 md:w-[75%] lg:w-[60%]">

      <p className="text-base md:text-lg text-[var(--foreground)]">
        I’m a frontend developer who enjoys making the web a little more interesting.
        I like experimenting with UI, animations, and different ways of solving problems.
      </p>

      <p className="mt-2 text-sm md:text-base text-[var(--muted-foreground)]">
        I’m currently exploring the full stack and building along the way.
      </p>

    </div>
  )
}

export default About
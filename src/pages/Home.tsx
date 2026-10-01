import Hero from '../components/Hero'
import TechStack from '../components/TechStack'
import GithubActivity from '../components/GithubActivity'
import About from '../components/About'
import Experience from '../components/Experience'
import SmoothScroll from '../components/SmoothScroll'
import Reveal from '../components/Reveal'
import bg_sunflower from "../assets/Modern_Acrylic_Sunflower_Painting-removebg-preview.png"

type Props = {
  darkMode: boolean
}

const Home = ({ darkMode }: Props) => {
  return (
    <div className="relative isolate mx-auto mt-8 flex w-[94%] flex-col gap-8 sm:mt-10 sm:w-[90%] sm:gap-10 md:mt-12 md:gap-12 lg:mt-15">
      <SmoothScroll>
        <img
          src={bg_sunflower}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-2 top-[35rem] -z-10 w-12 object-contain sm:-left-6 sm:top-[42rem] sm:w-20 md:-left-10 md:top-[48rem] md:w-32 md:opacity-70 lg:-left-16 lg:top-[35rem] lg:w-52 lg:opacity-80"
        />

        <img
          src={bg_sunflower}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 bottom-20 -z-10 w-12 rotate-180 object-contain sm:-right-6 sm:bottom-32 sm:w-20 md:-right-10 md:bottom-40 md:w-32 md:opacity-70 lg:-right-16 lg:bottom-50 lg:w-52 lg:opacity-80"
        />

        <Reveal>
          <Hero darkMode={darkMode} />
        </Reveal>

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <TechStack />
        </Reveal>

        <Reveal>
          <Experience />
        </Reveal>

        <Reveal>
          <GithubActivity />
        </Reveal>
      </SmoothScroll>
    </div>
  )
}

export default Home

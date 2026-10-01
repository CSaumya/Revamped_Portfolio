
import { useRef, useEffect, useState } from "react";
import Footer_Bg from "../assets/footer_bg 2.0.png";
import { Quote } from "lucide-react";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaDiscord,
  FaGithub,
  FaMedium,
  FaRegHeart,
} from "react-icons/fa6";
import { LuSparkles } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import hoverSoundFile from "../assets/arnav_geddada-ui-sound-374228.mp3";

type Quote = {
  quote: string;
  author: string;
};

type Props = {
  darkMode: boolean;
};

type Social = {
  name: string;
  link: string;
  icon: React.ReactNode;
  darkColor: string;
  lightColor: string;
};

const socialLinks: Social[] = [
  {
    name: "X",
    icon: <FaXTwitter />,
    link: "https://x.com/SaneSaumya",
    darkColor: "#FFFFFF",
    lightColor: "#000000",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    link: "https://linkedin.com/in/saumya--chaudhary/",
    darkColor: "#60A5FA",
    lightColor: "#0A66C2",
  },
  {
    name: "Discord",
    icon: <FaDiscord />,
    link: "https://discord.com/users/saumya_chaudhary_85280",
    darkColor: "#818CF8",
    lightColor: "#5865F2",
  },
  {
    name: "Email",
    icon: <MdEmail />,
    link: "mailto:saumyachaudhary051002@gmail.com",
    darkColor: "#F87171",
    lightColor: "#DC2626",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/CSaumya",
    darkColor: "#E5E7EB",
    lightColor: "#18181B",
  },
  {
    name: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@saumyachaudhary051002",
    darkColor: "#FFFFFF",
    lightColor: "#000000",
  },
];

const Footer = ({ darkMode }: Props) => {
  const [quote, setQuote] = useState<Quote | null>(null);

  const getQuote = async () => {
    try {
      const res = await fetch("https://dummyjson.com/quotes/random");
      const data: Quote = await res.json();
      setQuote(data);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  const soundRef = useRef<HTMLAudioElement | null>(null);
  const lastPlayed = useRef(0);

  const handleHover = () => {
    const now = Date.now();

    if (now - lastPlayed.current < 300) return;

    lastPlayed.current = now;

    if (!soundRef.current) {
      soundRef.current = new Audio(hoverSoundFile);
      soundRef.current.volume = 0.12;
    }

    soundRef.current.currentTime = 0;
    soundRef.current.play().catch(() => {});
  };

  return (
    <footer className="relative min-h-80 w-full overflow-hidden">
      <img
        src={Footer_Bg}
        alt=""
        className="absolute inset-0 h-full w-full border-t-2 border-[var(--border-hover)] object-cover"
      />

      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-black/70" : "bg-white/20"
        }`}
      />

      <div className="relative z-10 flex min-h-80 flex-col items-center justify-center gap-10 px-4 py-10 text-white sm:px-6 md:px-8 lg:flex-row lg:justify-between lg:gap-8 lg:px-10 lg:py-8">
        <div className="relative flex w-full flex-col items-center text-center lg:w-[40%]">
          <Quote
            size={80}
            className={`absolute -top-6 left-0 rotate-180 opacity-70 sm:left-8 sm:size-[100px] ${
              darkMode ? "text-gray-400/40" : "text-gray-600/70"
            }`}
          />

          {quote && (
            <>
              <p
                className={`relative z-10 max-w-xl font-sans text-base font-bold tracking-wide sm:text-lg ${
                  darkMode ? "text-[var(--primary-hover)]" : "text-black"
                }`}
              >
                {quote.quote}
              </p>

              <span
                className={`mt-2 text-sm ${
                  darkMode ? "text-white/70" : "text-gray-800"
                }`}
              >
                ⸻ {quote.author} ⸻
              </span>
            </>
          )}
        </div>

        <div
          className={`flex w-full flex-col items-center justify-center gap-4 sm:gap-5 lg:w-1/2 lg:items-end ${
            darkMode ? "text-[var(--primary-hover)]" : "text-black"
          }`}
        >
          <h1 className="text-lg font-semibold">Connect</h1>

          <div className="flex flex-wrap items-center justify-center gap-3 text-2xl sm:gap-5">
            {socialLinks.map((social) => (
              <div key={social.name} className="group relative">
                <a
                  onMouseEnter={handleHover}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  style={{
                    color: darkMode ? social.darkColor : social.lightColor,
                  }}
                  className={`block rounded-full border p-2 text-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 sm:text-2xl ${
                    darkMode ? "" : "bg-amber-300/20"
                  }`}
                >
                  {social.icon}
                </a>

                <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-black px-2.5 py-1 text-xs text-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                  {social.name}
                </span>
              </div>
            ))}
          </div>

          <p className="flex flex-wrap items-center justify-center gap-2 text-center text-sm sm:text-base lg:justify-end">
            Designed & built with
            <FaRegHeart />
            by Saumya
          </p>

          <p className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2 text-center text-xs font-normal sm:text-sm lg:justify-end">
            <span>© 2026 Saumya Chaudhary. All rights reserved.</span>
            <span className="flex items-center gap-1">
              Stay Curious <LuSparkles />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
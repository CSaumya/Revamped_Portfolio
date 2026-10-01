import { useEffect } from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";

type Props = {
  children: ReactNode;
};

const SmoothScroll = ({ children }: Props) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    let animationFrame: number;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;

import { motion } from "motion/react";
import LoadingSunflower from "../assets/loading_sunflower-removebg-preview.png";

type Props = {
  darkMode: boolean;
};

const LoadingScreen = ({ darkMode }: Props) => {
  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex items-center justify-center
        overflow-hidden px-6
        ${
          darkMode
            ? "bg-[#11120D] text-white"
            : "bg-[#FAF9F6] text-[#222222]"
        }
      `}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          flex w-full max-w-md
          items-center justify-center gap-4
          sm:gap-8
        "
      >
        <div className="min-w-0 flex-1 animate-pulse">

          <p className="mt-1.5 text-xs text-[var(--muted-foreground)] sm:text-sm">
            Getting things ready
          </p>

        <div className="flex items-center gap-1.5 mt-5">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--primary)]"
              style={{ animationDelay: `${dot * 140}ms` }}
            />
          ))}
        </div>
        </div>

        <motion.img
          src={LoadingSunflower}
          alt="Sunflowers under a starry night sky"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="
            h-24 w-20 shrink-0 rounded-xl
            object-cover shadow-lg
            sm:h-32 sm:w-24
          "
        />
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
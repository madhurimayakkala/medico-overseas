"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        sessionStorage.setItem("introSeen", "true");
        onComplete();
      }, 600);
    }, 1600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#08111F]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Glow */}
          <motion.div
            className="absolute h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative text-center">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
              }}
              className="text-5xl font-black tracking-[0.45em] text-white md:text-7xl"
            >
              MEDICO
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: .15,
                duration: .7,
              }}
              className="mt-3 text-3xl font-light tracking-[0.65em] text-blue-100 md:text-5xl"
            >
              OVERSEAS
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 180 }}
              transition={{
                delay: .45,
                duration: .7,
              }}
              className="mx-auto mt-7 h-[2px] rounded-full bg-gradient-to-r from-transparent via-amber-400 to-transparent"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: .7 }}
              transition={{
                delay: .7,
              }}
              className="mt-6 text-sm uppercase tracking-[0.5em] text-slate-300"
            >
              Beyond Borders
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
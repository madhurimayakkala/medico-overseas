"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import IntroScreen from "./IntroScreen";

interface IntroWrapperProps {
  children: React.ReactNode;
}

export default function IntroWrapper({ children }: IntroWrapperProps) {
  const [showIntro, setShowIntro] = useState(false);

  useLayoutEffect(() => {
    const seen = sessionStorage.getItem("introSeen");
    if (!seen) {
      setShowIntro(true);
    } else {
      // Already seen this session — nothing to show, so reveal content
      // immediately by removing the class the blocking script added.
      document.documentElement.classList.remove("intro-active");
    }
  }, []);

  useEffect(() => {
    if (!showIntro) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showIntro]);

  const handleComplete = () => {
    sessionStorage.setItem("introSeen", "true");
    document.documentElement.classList.remove("intro-active");
    setShowIntro(false);
  };

  return (
    <>
      {children}
      {showIntro && <IntroScreen onComplete={handleComplete} />}
    </>
  );
}
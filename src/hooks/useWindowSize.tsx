import { useState, useEffect } from "react";

export function useWindowSize() {
  const [width, setWidth] = useState<number | undefined>(undefined); 

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width };
}
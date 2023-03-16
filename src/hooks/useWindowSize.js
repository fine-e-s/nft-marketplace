import { useState, useEffect } from "react";

export function useWindowSize() {
  const [sizes, setSizes] = useState({
    height: undefined,
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setSizes({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return sizes;
}

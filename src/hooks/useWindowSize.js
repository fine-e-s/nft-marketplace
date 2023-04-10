import { useState, useEffect, createContext, useContext } from "react";

const WindowSizeContext = createContext({
  height: undefined,
  width: undefined,
});

export function WindowSizeContextProvider({ children }) {
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

  return (
    <WindowSizeContext.Provider value={sizes}>
      {children}
    </WindowSizeContext.Provider>
  );
}

export function useWindowSize() {
  return useContext(WindowSizeContext);
}

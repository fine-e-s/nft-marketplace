import { createContext, useContext, useState } from "react";
import { gsap } from "gsap";

const RegContext = createContext();

export function RegContextProvider({ children }) {
  const [isRegOpened, setRegOpened] = useState(false);

  function regToggle() {
    gsapRegToggle(isRegOpened);
    setRegOpened(!isRegOpened);
  }

  function gsapRegToggle(isRegOpened) {
    if (isRegOpened) {
      gsap.fromTo(
        "[data-regform]",
        { scale: 1, autoAlpha: 1 },
        { scale: 1.5, autoAlpha: 0, duration: 0.3 }
      );
    } else {
      gsap.set("[data-loginform]", { x: 0, autoAlpha: 1 });
      gsap.fromTo(
        "[data-regform]",
        { scale: 1, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 0.3 }
      );
    }
  }

  return (
    <RegContext.Provider value={{ isRegOpened, regToggle }}>
      {children}
    </RegContext.Provider>
  );
}

export function useReg() {
  return useContext(RegContext);
}

import { createContext, useContext, useState } from "react";

const RegContext = createContext();

export function RegContextProvider({ children }) {
  const [isRegOpened, setRegOpened] = useState(false);

  function regToggle() {
    setRegOpened(!isRegOpened);
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

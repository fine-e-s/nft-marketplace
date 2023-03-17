import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export function MenuContextProvider({ children }) {
  const [isMenuOpened, setMenuOpened] = useState(false);

  function menuToggle() {
    setMenuOpened(!isMenuOpened);
  }

  return (
    <MenuContext.Provider value={{ isMenuOpened, menuToggle }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}

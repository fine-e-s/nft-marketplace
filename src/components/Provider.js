import { RegContextProvider } from "@/hooks/useReg";
import { MenuContextProvider } from "@/hooks/useMenu";
import { WindowSizeContextProvider } from "@/hooks/useWindowSize";

export default function Provider({ children }) {
  return (
    <>
      <WindowSizeContextProvider>
        <RegContextProvider>
          <MenuContextProvider>{children}</MenuContextProvider>
        </RegContextProvider>
      </WindowSizeContextProvider>
    </>
  );
}

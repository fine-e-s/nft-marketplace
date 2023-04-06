import { RegContextProvider } from "@/hooks/useReg";
import { MenuContextProvider } from "@/hooks/useMenu";

export default function Provider({ children }) {
  return (
    <>
      <RegContextProvider>
        <MenuContextProvider>{children}</MenuContextProvider>
      </RegContextProvider>
    </>
  );
}

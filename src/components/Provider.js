import { RegContextProvider } from "@/hooks/useReg";
import { MenuContextProvider } from "@/hooks/useMenu";
import { CategoryContextProvider } from "@/hooks/useCategory";

export default function Provider({ children }) {
  return (
    <>
      <RegContextProvider>
        <MenuContextProvider>
          <CategoryContextProvider>{children}</CategoryContextProvider>
        </MenuContextProvider>
      </RegContextProvider>
    </>
  );
}

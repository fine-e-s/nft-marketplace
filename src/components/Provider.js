import { RegContextProvider } from "@/hooks/useReg";
import { MenuContextProvider } from "@/hooks/useMenu";
import { UserContextProvider } from "@/hooks/useUser";

export default function Provider({ children }) {
  return (
    <>
      <UserContextProvider>
        <RegContextProvider>
          <MenuContextProvider>{children}</MenuContextProvider>
        </RegContextProvider>
      </UserContextProvider>
    </>
  );
}

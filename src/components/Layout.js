import Header from "./Header";
import Registration from "./Registration";
import { RegContextProvider } from "@/hooks/useReg";
import { MenuContextProvider } from "@/hooks/useMenu";

export default function Layout({ children }) {
  return (
    <>
      <RegContextProvider>
        <MenuContextProvider>
          <Registration />
          <Header />
          <div className="flex flex-col items-center">{children}</div>
        </MenuContextProvider>
      </RegContextProvider>
    </>
  );
}

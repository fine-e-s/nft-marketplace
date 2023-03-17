import Header from "./Header";
import Registration from "./Registration";
import Transition from "./Transition";
import { RegContextProvider } from "@/hooks/useReg";
import { MenuContextProvider } from "@/hooks/useMenu";

export default function Layout({ children }) {
  return (
    <>
      <RegContextProvider>
        <MenuContextProvider>
          <Registration />
          <Header />
          <Transition>
            <div className="flex flex-col items-center">{children}</div>
          </Transition>
        </MenuContextProvider>
      </RegContextProvider>
    </>
  );
}

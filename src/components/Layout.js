import Header from "./Header";
import Registration from "./Registration";
import { RegContextProvider } from "@/hooks/useReg";

export default function Layout({ children }) {
  return (
    <>
      <RegContextProvider>
        <Registration />
        <Header />
        <div className="flex flex-col items-center">{children}</div>
      </RegContextProvider>
    </>
  );
}

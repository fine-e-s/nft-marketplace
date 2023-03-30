import Header from "./Header";
import Registration from "./Registration";
import Transition from "./Transition";

export default function Layout({ children }) {
  return (
    <>
      <Registration />
      <Header />
      <Transition>
        <div className="flex flex-col items-center">{children}</div>
      </Transition>
    </>
  );
}

import Header from "./Header";
import Registration from "./Registration";
import Transition from "./Transition";
import Provider from "./Provider";

export default function Layout({ children }) {
  return (
    <>
      <Provider>
        <Registration />
        <Header />
        <Transition>
          <div className="flex flex-col items-center">{children}</div>
        </Transition>
      </Provider>
    </>
  );
}

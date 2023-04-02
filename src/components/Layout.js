import { useAuthState } from "react-firebase-hooks/auth";
import Header from "./Header";
import Registration from "./Registration";
import Transition from "./Transition";
import { auth } from "@/firebase/firebaseApp";

export default function Layout({ children }) {
  const [user, loading] = useAuthState(auth);

  return (
    <>
      {!loading && (
        <>
          <Registration />
          <Header />
          <Transition>
            <div className="flex flex-col items-center">{children}</div>
          </Transition>
        </>
      )}
    </>
  );
}

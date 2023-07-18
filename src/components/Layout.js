import { useAuthState } from "react-firebase-hooks/auth";
import Header from "./Header";
import Registration from "./Registration";
import { auth } from "@/firebase/firebaseApp";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const [currentChildren, setChildren] = useState(children);
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const el = useRef();

  useEffect(() => {
    if (children !== currentChildren) {
      let tl = gsap.timeline();

      tl.to(el.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => setChildren(children),
      }).to(el.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }
  }, [router.route]);

  return (
    <>
      {!loading && (
        <>
          <Registration />
          <Header />
          <div ref={el} className="flex flex-col items-center">
            {currentChildren}
          </div>
        </>
      )}
    </>
  );
}

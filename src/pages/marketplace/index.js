import { Suspense, lazy } from "react";
import Loading from "./loading";
import Categories from "@/components/Categories";
import { CategoryContextProvider } from "@/hooks/useCategory";

const Cards = lazy(() => delayForDemo(import("@/components/Cards.js")));

export default function Marketplace() {
  return (
    <>
      <Categories />
      <div className="flex w-full justify-center bg-lighter">
        <Suspense fallback={<Loading />}>
          <Cards />
        </Suspense>
      </div>
    </>
  );
}

async function delayForDemo(promise) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return promise;
}

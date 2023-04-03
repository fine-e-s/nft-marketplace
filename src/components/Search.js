import { useContext } from "react";
import { SearchContext } from "@/pages/marketplace";

export default function Search() {
  const { propmt, setPrompt } = useContext(SearchContext);

  return (
    <>
      <div className="flex h-max w-full justify-center bg-transparent">
        <div className="mb-8 flex h-12 w-[700px] items-center rounded-[20px] border-2 border-lighter bg-inherit">
          <div className="mx-3 flex w-full bg-inherit">
            <input
              className="mx-2 w-full bg-inherit"
              type="search"
              onChange={(e) => setPrompt(e.target.value)}
            />
            <img src="icons/search.svg" className="bg-inherit" />
          </div>
        </div>
      </div>
    </>
  );
}

import { useContext } from "react";
import { SearchContext } from "@/pages/marketplace";

export default function Search() {
  const { propmt, setPrompt } = useContext(SearchContext);

  return (
    <>
      <div className="h-max bg-transparent">
        <div className="flex h-12 items-center rounded-[20px] border-2 border-lighter bg-inherit">
          <div className="mx-3 flex w-full bg-inherit">
            <input
              className="mx-2 w-full bg-inherit placeholder:text-lighter"
              type="search"
              placeholder="Search..."
              onChange={(e) => setPrompt(e.target.value)}
            />
            <img src="icons/search.svg" className="bg-inherit" />
          </div>
        </div>
      </div>
    </>
  );
}

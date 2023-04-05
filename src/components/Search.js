import { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/pages/marketplace";
import Image from "next/image";

export default function Search() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const { propmt, setPrompt } = useContext(SearchContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPrompt(text);
      setLoading(false);
    }, 700);

    return () => {
      clearTimeout(timer);
      setLoading(true);
    };
  }, [text]);

  return (
    <>
      <div className="h-max bg-transparent">
        <div className="flex h-12 items-center rounded-[20px] border-2 border-lighter bg-inherit">
          <div className="mx-3 flex w-full bg-inherit">
            <input
              className="mx-2 w-full bg-inherit placeholder:text-lighter"
              type="search"
              placeholder="Search..."
              onChange={(e) => setText(e.target.value)}
            />
            {loading ? (
              <Image
                src="icons/loading.svg"
                width={24}
                height={24}
                className=" bg-transparent"
              />
            ) : (
              <Image
                src="icons/search.svg"
                width={24}
                height={24}
                className="bg-transparent"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

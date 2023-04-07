import { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/pages/marketplace";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const { search } = router.query;

  const [text, setText] = useState("");
  const { searchLoading, setSearchLoading } = useContext(SearchContext);
  const { prompt, setPrompt } = useContext(SearchContext);

  useEffect(() => {
    setPrompt(text);
    const timer = setTimeout(() => {
      const newQuery = { ...router.query, search: text };

      if (!text) {
        delete newQuery.search;
      }

      router.push({
        query: newQuery,
      });
    }, 700);

    return () => {
      setSearchLoading(true);
      clearTimeout(timer);
    };
  }, [text]);

  useEffect(() => {
    setText(search);
  }, [search]);

  return (
    <>
      <div className="h-max bg-transparent">
        <div className="flex h-12 items-center rounded-[20px] border-2 border-lighter bg-inherit">
          <div className="mx-3 flex w-full bg-inherit">
            <input
              className="mx-2 w-full bg-inherit placeholder:text-lighter"
              type="search"
              placeholder="Search..."
              defaultValue={search}
              onChange={(e) => setText(e.target.value)}
            />
            {searchLoading ? (
              <Image
                src="icons/loading.svg"
                alt="loading"
                width={24}
                height={24}
                className=" bg-transparent"
              />
            ) : (
              <Image
                src="icons/search.svg"
                alt="search"
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

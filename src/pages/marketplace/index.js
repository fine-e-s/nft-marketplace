import { CategoriesMarketplace } from "@/components/Categories";
import { useState, useEffect, createContext } from "react";
import Cards from "@/components/Cards";
import { useRouter } from "next/router";

export const SearchContext = createContext("");

export default function Marketplace() {
  const router = useRouter();

  const [prompt, setPrompt] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  const { search } = router.query;

  useEffect(() => setPrompt(search), [search]);

  return (
    <>
      <SearchContext.Provider
        value={{ prompt, setPrompt, searchLoading, setSearchLoading }}
      >
        <CategoriesMarketplace />
        <Cards />
      </SearchContext.Provider>
    </>
  );
}

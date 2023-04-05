import { CategoriesMarketplace } from "@/components/Categories";
import { useState, useEffect, createContext } from "react";
import Cards from "@/components/Cards";
import { useRouter } from "next/router";
import { useCategory } from "@/hooks/useCategory";

export const SearchContext = createContext("");

export default function Marketplace() {
  const router = useRouter();
  const { category, newCategory } = useCategory();
  const { categoryQuery } = router.query;
  useEffect(() => newCategory(categoryQuery), [categoryQuery]);

  const [prompt, setPrompt] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

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

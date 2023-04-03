import { CategoriesMarketplace } from "@/components/Categories";
import { useState, createContext } from "react";
import Cards from "@/components/Cards";
import { useRouter } from "next/router";
import { useCategory } from "@/hooks/useCategory";

export const SearchContext = createContext("");

export default function Marketplace() {
  const router = useRouter();
  const { category, newCategory } = useCategory();
  const { categoryQuery } = router.query;
  newCategory(categoryQuery);

  const [prompt, setPrompt] = useState("");

  return (
    <>
      <SearchContext.Provider value={{ prompt, setPrompt }}>
        <CategoriesMarketplace />
        <Cards />
      </SearchContext.Provider>
    </>
  );
}

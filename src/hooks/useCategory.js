import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

const CategoryContext = createContext(null);

export function CategoryContextProvider({ children }) {
  const [category, setCategory] = useState(null);
  const router = useRouter();

  function newCategory(category) {
    category ? setCategory(category) : setCategory(null);
  }

  useEffect(() => {
    newCategory(null);
  }, [router.pathname]);

  return (
    <CategoryContext.Provider value={{ category, newCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  return useContext(CategoryContext);
}

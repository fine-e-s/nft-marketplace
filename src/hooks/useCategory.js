const { createContext, useState, useContext } = require("react");

const CategoryContext = createContext("All");

export function CategoryContextProvider({ children }) {
  const [category, setCategory] = useState("All");

  function newCategory(category) {
    category ? setCategory(category) : setCategory("");
  }

  return (
    <CategoryContext.Provider value={{ category, newCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  return useContext(CategoryContext);
}

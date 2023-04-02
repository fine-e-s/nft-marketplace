const { createContext, useState, useContext } = require("react");

const CategoryContext = createContext(null);

export function CategoryContextProvider({ children }) {
  const [category, setCategory] = useState(null);

  function newCategory(category) {
    category ? setCategory(category) : setCategory(null);
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

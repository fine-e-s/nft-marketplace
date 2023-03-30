import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [user, setCurrentUser] = useState(null);

  useEffect(() => {
    async function setUser() {
      const res = await fetch("api/login");
      const data = await res.json();
      setCurrentUser(data);
    }
    setUser();
  }, []);

  return (
    <>
      <UserContext.Provider value={{ user, setCurrentUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
}

export function useUser() {
  return useContext(UserContext);
}

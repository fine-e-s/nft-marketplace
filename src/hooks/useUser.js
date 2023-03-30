import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [user, setCurrentUser] = useState(null);

  function setUser(user) {
    setCurrentUser(user);
  }

  useEffect(() => {
    async function getUser() {
      const res = await fetch("api/login");
      const data = await res.json();
      setUser(data);
    }
    getUser();
  }, []);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
}

export function useUser() {
  return useContext(UserContext);
}

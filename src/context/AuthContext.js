import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'services';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userCredentials, setUserCredentials] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user =>
      user ? setUserCredentials(user) : setUserCredentials(null),
    );

    return () => unsub();
  }, []);

  const context = {
    userCredentials,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};

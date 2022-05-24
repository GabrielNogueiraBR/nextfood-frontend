import { createContext, ReactNode, useContext, useState } from "react";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  isLogged: boolean;
  doLogin: () => void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: UserProviderProps): JSX.Element {
  const [isLogged, setIsLogged] = useState(false);

  const doLogin = async () => {
    setIsLogged(true);
  };

  return (
    <UserContext.Provider value={{ isLogged, doLogin }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextData {
  const context = useContext(UserContext);

  return context;
}

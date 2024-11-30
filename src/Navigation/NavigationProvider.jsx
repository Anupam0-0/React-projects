import { createContext } from "react";

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
};

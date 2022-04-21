import React, { useState, createContext } from 'react';

interface IHamburgerContext {
  hamburger: boolean;
  setHamburger: React.Dispatch<React.SetStateAction<boolean>>
}

export const HamburgerContext = createContext<IHamburgerContext>({} as IHamburgerContext);
const HamburgerProvider: React.FC = ({ children }) => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <HamburgerContext.Provider
      value={{
        hamburger,
        setHamburger,
      }}
    >
      {children}
    </HamburgerContext.Provider>
  );
};

export default HamburgerProvider;

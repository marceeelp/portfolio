import { createContext, useContext, useState } from "react";

const PageContext = createContext();
export const PageSwitchContext = createContext();

export const usePage = () => {
  return useContext(PageContext);
};

export const usePageSwitch = () => {
  return useContext(PageSwitchContext);
};

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState("Home");

  const switchPage = (currentPage) => {
    setPage(currentPage);
  };

  return (
    <PageContext.Provider value={page}>
      <PageSwitchContext.Provider value={switchPage}>
        {children}
      </PageSwitchContext.Provider>
    </PageContext.Provider>
  );
};

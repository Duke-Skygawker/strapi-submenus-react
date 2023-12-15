import { useContext, useState } from "react";
import { createContext } from "react";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa6";
import sublinks from "./data";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [pageId, setPageId] = useState(null);

  const closeSidebar = () => {
    setShowSidebar(false);
  };
  const openSidebar = () => {
    setShowSidebar(true);
  };
  const updatePageId = (e) => {
    setPageId(e.target.id);
    console.log(pageId);
  };
  return (
    <GlobalContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        updatePageId,
        showSidebar,
        setShowSidebar,
        pageId,
        setPageId,
        closeCross: <ImCross />,
        faBars: <FaBars />,
        sublinks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;

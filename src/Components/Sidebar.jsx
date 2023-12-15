import { useGlobalContext } from "../Context";

const Sidebar = () => {
  const { closeCross, showSidebar, closeSidebar } = useGlobalContext();
  return (
    <div className={showSidebar ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          {closeCross}
        </button>
        <h4>asasdasd</h4>
      </div>
    </div>
  );
};
export default Sidebar;

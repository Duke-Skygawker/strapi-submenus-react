import { useGlobalContext } from "../Context";

const Sidebar = () => {
  const { closeCross, showSidebar, closeSidebar, sublinks } =
    useGlobalContext();
  return (
    <div className={showSidebar ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          {closeCross}
        </button>
        {sublinks.map((link) => {
          const { pageId, page, links } = link;
          return (
            <article key={pageId}>
              <h4>{page}</h4>
              <ul className="sidebar-sublinks">
                {links.map((item) => {
                  const { id, label, icon, url } = item;
                  return (
                    <li key={id}>
                      <a href={url}>
                        <i>{icon}</i>
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
};
export default Sidebar;

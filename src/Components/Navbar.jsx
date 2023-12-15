import { useGlobalContext } from "../Context";
import sublinks from "../data";

const Navbar = () => {
  const { openSidebar, faBars } = useGlobalContext();
  return (
    <nav className="nav-center">
      <h3 className="logo">strapi</h3>
      <div>
        <ul className="nav-links">
          {sublinks.map((sublink) => {
            const { pageId, page } = sublink;
            return (
              <li key={pageId} id={pageId} className="nav-link">
                {page}
              </li>
            );
          })}
        </ul>
      </div>
      <button className="toggle-btn" onClick={openSidebar}>
        {faBars}
      </button>
    </nav>
  );
};
export default Navbar;

import { useGlobalContext } from "../Context";

const Navbar = () => {
  const { openSidebar, faBars } = useGlobalContext();
  return (
    <nav className="nav-center">
      <h3 className="logo">strapi</h3>
      <div>
        <ul className="nav-links">
          <li className="nav-link">asd</li>
          <li className="nav-link">asd</li>
          <li className="nav-link">asd</li>
        </ul>
      </div>
      <button className="toggle-btn" onClick={openSidebar}>
        {faBars}
      </button>
    </nav>
  );
};
export default Navbar;

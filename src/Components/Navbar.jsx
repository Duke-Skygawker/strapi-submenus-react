import { useGlobalContext } from "../Context";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar, faBars } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <div>
          <NavLinks />
        </div>
        <button className="toggle-btn" onClick={openSidebar}>
          {faBars}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;

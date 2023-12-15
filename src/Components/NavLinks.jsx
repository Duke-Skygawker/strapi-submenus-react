import { useGlobalContext } from "../Context";

const NavLinks = () => {
  const { updatePageId, sublinks, toggleSubmenu } = useGlobalContext();
  return (
    <ul className="nav-links">
      {sublinks.map((sublink) => {
        const { pageId, page } = sublink;
        return (
          <li
            key={pageId}
            id={pageId}
            className="nav-link"
            onMouseEnter={updatePageId}
            onClick={toggleSubmenu}
          >
            {page}
          </li>
        );
      })}
    </ul>
  );
};
export default NavLinks;

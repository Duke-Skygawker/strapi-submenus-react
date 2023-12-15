import { useEffect } from "react";
import { useGlobalContext } from "../Context";

const Submenu = () => {
  const { showSubmenu, sublinks, pageId } = useGlobalContext();
  if (pageId) {
    const currentLinks = sublinks.filter((item) => item.pageId === pageId);
    const { page, links } = currentLinks[0];
    return (
      <div className={showSubmenu ? "submenu show-submenu" : "submenu"}>
        <h5>{page}</h5>
        <ul className="submenu-links">
          {links.map((link) => {
            const { id, label, icon, url } = link;
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
      </div>
    );
  }
};
export default Submenu;

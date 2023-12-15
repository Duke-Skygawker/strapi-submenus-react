import { useGlobalContext } from "../Context";

const Submenu = () => {
  const {} = useGlobalContext();
  return (
    <div className="submenu show-submenu">
      <h5>Deez nutz</h5>
      <ul className="submenu-links">
        <li>
          <a href="">asdasd</a>
        </li>
        <li>
          <a href="">asdasd</a>
        </li>
        <li>
          <a href="">asdasd</a>
        </li>
        <li>
          <a href="">asdasd</a>
        </li>
      </ul>
    </div>
  );
};
export default Submenu;

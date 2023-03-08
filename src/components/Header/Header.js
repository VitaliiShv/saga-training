import { NavLink } from "react-router-dom";

import css from "./Header.module.css";

const navigation = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Latest News",
    path: "/latest-news",
  },
  {
    id: 3,
    title: "Popular News",
    path: "/popular-news",
  },
];

const Header = () => {
  return (
    <header>
      <nav className={css.nav}>
        <div className={css.links}>
          {navigation.map(({ id, title, path }) => (
            <NavLink key={id} to={path} extract={true}>
              {title}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;

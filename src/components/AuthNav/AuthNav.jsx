import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink className={css.navlink} to="/register">
      Register
    </NavLink>
    <NavLink className={css.navlink} to="/login">
      Log in
    </NavLink>
  </div>
);

export default AuthNav;

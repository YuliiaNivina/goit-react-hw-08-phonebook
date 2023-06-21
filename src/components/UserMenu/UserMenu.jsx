import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.user__box}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        alt="avatar"
        width={30}
        height={30}
      />
      <p className={css.user__name}>{user.name}</p>
      <button
        className={css.logout__btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </button>
    </div>
  );
};

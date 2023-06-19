import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { getIsLoading, getError } from './redux/contacts/selectors';
// import { fetchContacts } from 'redux/contacts/operations';
import Layout from 'components/Layout';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshCurrent } from 'redux/auth/operations';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
// import ContactList from 'components/ContactList/ContactList';
// import ContactForm from 'components/ContactForm/ContactForm';
// import Filter from 'components/Filter/Filter';

const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const Contacts = lazy(() => import('./pages/Contacts'));

// const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       {<ContactList />}
//       {isLoading && !error && <b>Request in progress...</b>}
//     </div>
//   );
// };

const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshCurrent());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="*" element={<Home />} /> */}
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<Register />} />} />
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />}/>} />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/" component={<Contacts />}/>} />
      </Route>
    </Routes>
  );
};

export default App;

import css from './HomePage.module.css';

const HomePage = () => (
  <div className={css.home}>
    <h1 className={css.home__text}>
      Welcome <br /> to <br /> phonebook
    </h1>
  </div>
);

export default HomePage;

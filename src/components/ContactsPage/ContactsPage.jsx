import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import css from './ContactsPage.module.css';

const ContactsPage = () => (
  <div className={css.contacts__box}>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    {<ContactList />}
  </div>
);

export default ContactsPage;

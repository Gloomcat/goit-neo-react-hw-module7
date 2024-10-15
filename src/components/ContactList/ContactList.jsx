import css from './ContactList.module.css';

import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice.js';
import { selectNameFilter } from '../../redux/filtersSlice.js';

import Contact from '../Contact/Contact.jsx';

const getVisibleContacts = (contacts, nameFilter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contacts, nameFilter);

  return (
    <ul className={css['contact-list']}>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

import css from './ContactList.module.css';

import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice.js';

import Contact from '../Contact/Contact.jsx';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

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

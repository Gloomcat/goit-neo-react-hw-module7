import css from './Contact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css['contact']}>
      <ul>
        <li>
          <IoPerson size={18} />
          <p>{name}</p>
        </li>
        <li>
          <FaPhoneAlt size={18} />
          <p>{number}</p>
        </li>
      </ul>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;

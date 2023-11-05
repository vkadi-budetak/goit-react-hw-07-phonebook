import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redax/contactsThunk';

import css from './ContactForm.module.css';
import { selectContacts } from 'redax/contacts.selectors';

const ContactForm = () => {
  const [fields, setFields] = useState({ name: '', number: '' });

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleAddContact = event => {
    event.preventDefault();

    const isDublicate = contacts.some(contact => contact.name === fields.name)
    if (isDublicate) {
      window.alert(`${fields.name} is already in contacts.`);
      return;
    }

    const newContact = {
      name: fields.name,
      phone: fields.phone,
    };

    dispatch(addContact(newContact));
    setFields({ name: '', number: '' });


  };

  const handleInputChange = event => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleAddContact}>
      <label>
        <span className={css.title}>Name</span>
        <input
          onChange={handleInputChange}
          value={fields.name}
          type="text"
          name="name"
          required
        />
      </label>
      <label>
        <span className={css.title}>Number</span>
        <input
          onChange={handleInputChange}
          value={fields.number}
          type="tel"
          name="number"
          required
        />
      </label>
      <span className={css.btn}>
        <button type="submit">Add contact</button>
      </span>
    </form>
  );
};

export default ContactForm;

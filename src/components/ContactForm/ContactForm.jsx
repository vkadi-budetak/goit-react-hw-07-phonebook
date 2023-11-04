import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redax/contactsReduсer';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const [fields, setFields] = useState({ name: '', number: '' });

  const dispatch = useDispatch();

  const handleAddContact = event => {
    event.preventDefault();

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

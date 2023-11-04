import React from 'react';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redax/contactsReduсer';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li>
      {contact.name}: {contact.number}{' '}
      <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
    </li>
  );
}

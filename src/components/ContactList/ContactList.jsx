import React from 'react';

import { useSelector } from 'react-redux';

import {
  selectContacts,
  selectContactsError,
  selectContactsisLoading,
} from 'redax/contacts.selectors';

import ContactItem from './ContactItem';

import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(state => state.filter);
  const isLoading = useSelector(selectContactsisLoading);
  const error = useSelector(selectContactsError);

  const filteredContacts =
    contacts !== null &&
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div>
      <ul>
        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}

        {filteredContacts.map(el => (
          <ContactItem key={el.id} contact={el} />
        ))}
      </ul>
    </div>
  );
}

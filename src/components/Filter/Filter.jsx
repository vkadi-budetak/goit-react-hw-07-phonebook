import React from 'react';

import { selectContactsFilter } from 'redax/contacts.selectors';

import css from '../ContactForm/ContactForm.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redax/contactsReduсer';

export default function Filter() {
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <label>
      <span className={css.title}>Find contacts by name</span>
      <input value={filter} onChange={handleFilter} name="filter" type="text" />
    </label>
  );
}

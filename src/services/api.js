import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://654621c5fe036a2fa95535e0.mockapi.io/',
});

//--------------------CONTACTS---------------------

export const requestContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};

export const requestAddContact = async contact => {
  const { data } = await contactsInstance.post('/contacts', contact);
  return data;
};

export const requestDeleteContact = async contactId => {
  const { data } = await contactsInstance.delete(`/contacts/${contactId}`);
  return data;
};

import { useState, useEffect } from 'react';
import { Container, Section, Title } from './App.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import GlobalStyle from './GlobalStyle';
import { Form } from './Form/Form';
import onGetLocal from './getLocal';

export const App = () => {
  const [contacts, setContacts] = useState(onGetLocal);
  const [filter, setFilter] = useState('');

  const handleFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const formSubmitHandler = data => {
    const ContactAlert = contacts.find(contact => contact.name === data.name);

    if (ContactAlert) {
      alert(`${data.name} is already in contacts`);
      return;
    } else {
      setContacts(prevState => [...prevState, data]);
    }
  };

  const onContactDelete = contactID =>
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactID)
    );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Section>
        <Title>Phonebook</Title>
        <Form onSubmit={formSubmitHandler} />
      </Section>
      <Section>
        <Title>Contacts</Title>
        <Filter onFilterHandle={handleFilter} />
        <Contacts
          contactList={contacts}
          search={filter}
          deleteContact={onContactDelete}
        />
      </Section>
      <GlobalStyle />
    </Container>
  );
};

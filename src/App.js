import { useState, useEffect } from "react";
import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import shortid from "shortid";

function App() {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);



const OnDeleteContact = (id) => {
  setContacts(contacts.filter((i) => i.id !== id));
  };

const changeFilterInput = (e) => {
    setFilter(e.target.value );
  };

const onFilteredContacts = () => {
    
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

const formSubmitHandler = ( name, number ) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
  contacts.some((i) => i.name === contact.name)
      ? alert(`${name} is already in contacts`)
      : setContacts(( contacts ) => [contact, ...contacts]);
  };

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />
        <h2>Contacts</h2>
        <section>
          <Filter value={filter} changeFilterInput={changeFilterInput} />
          <ContactList
            contacts={onFilteredContacts()}
            onDeleteClick={OnDeleteContact}
          />
        </section>
      </Container>
    );
  }

export default App;

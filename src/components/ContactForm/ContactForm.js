import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

function ContactForm ({onSubmit}) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
 const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

 const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name, number);
    reset();
  };

 const reset = () => {
    setName("");
    setNumber("");
  };

    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.form__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
          placeholder="Full name"
        />
        <input
          className={styles.form__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
          placeholder="Phone number"
        />

        <button type="submit" className={styles.btnContact}>
          Add contact
        </button>
      </form>
    );
}


  ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

export default ContactForm;

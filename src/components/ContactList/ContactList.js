import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts, onDeleteClick }) => (
  <ul className={styles.List}>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id} className={styles.itemList}>
          <ContactListItem
            name={name}
            number={number}
            onDeleteClick={onDeleteClick}
            id={id}
          />
        </li>
      );
    })}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactList;

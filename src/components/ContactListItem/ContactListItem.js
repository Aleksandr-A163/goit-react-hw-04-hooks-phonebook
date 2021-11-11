import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ id, name, number, onDeleteClick }) => {
  return (
    <>
      <p className={styles.text}>
        {name}: {number}
      </p>
      <button
        className={styles.deleteBtn}
        type="button"
        onClick={() => onDeleteClick(id)}
      >
        Delete
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactListItem;

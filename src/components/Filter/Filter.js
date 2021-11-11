import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, changeFilterInput }) => (
  <label className={styles.labelFind}>
    <span className={styles.spanFind}>Find contacts by name</span>
    <input
      className={styles.inputFind}
      type="text"
      name="filter"
      value={value}
      onChange={changeFilterInput}
      placeholder="Type contact"
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};

export default Filter;

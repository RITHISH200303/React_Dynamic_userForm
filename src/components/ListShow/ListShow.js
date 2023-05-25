import styles from "./ListShow.module.css";

import React from "react";

const ListShow = (props) => {
  return (
    <ul className={`${styles.formContainet}`}>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} age old)
        </li>
      ))}
    </ul>
  );
};

export default ListShow;

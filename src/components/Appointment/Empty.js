import React from 'react';
import 'components/Appointment/Styles.scss';
// Component that displays an empty appointment slot
export default function Empty(props) {
  return (
    <main className="appointment__add">
      <img
        onClick={props.onAdd}
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
      />
    </main>
  );
}

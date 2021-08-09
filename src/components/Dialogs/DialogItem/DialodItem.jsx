import React from 'react';
import { NavLink } from 'react-router-dom';
import './DialogItem.css';

const DialogItem = ({ name, id }) => {

  return (
    <div className='dialogs'>
      <NavLink to={`dialogs/${id}`}> {name} </NavLink>
    </div>
  );
};

export default DialogItem;

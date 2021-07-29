import React from "react";
import './DialogItem.css';
import { NavLink } from 'react-router-dom';



const DialogItem = ({name, id}) => {
 
  return(
    <div className='dialogs'>
           <NavLink to={`dialogs/${id}`}> {name} </NavLink>
           
    </div>
      )
}

export default DialogItem
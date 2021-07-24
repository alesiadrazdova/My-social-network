import React from "react";
import './DialogItem.css';
import { NavLink } from 'react-router-dom';



const DialogItem = ({name, id}) => {
 
  return(
    <div className='dialog'>
           <NavLink to={`dialog/${id}`}> {name} </NavLink>
           
    </div>
      )
}

export default DialogItem
import React from 'react';
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";


const Dialog =(props) => {
    return(
        <div className={s.dialog}>
          <img alt = "не грузит" src='https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png' />
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
      </div>
      
    );
}

export default Dialog;
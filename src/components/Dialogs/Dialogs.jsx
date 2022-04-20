import React from "react";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";



const Dialogs = (props) => {
 
 
const dialogsElements = props.Data.dialogsData.map(el => <Dialog name={el.name} id={el.id}/>)  

const messagesElements = props.Data.messagesData.map(el => <Message text={el.text} id={el.id}/>)

const newMessageElement = React.createRef();

let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                    {dialogsElements}
            </div>
            <div className={s.messages}>
               {messagesElements}
               <div className={s.btnMessage}>
                    <textarea ref={newMessageElement} name="" id="" cols="60" rows="2"></textarea>
                    <button onClick={addMessage}>добавить</button>
               </div>
            </div>
        </div>
    )
}

export default Dialogs;

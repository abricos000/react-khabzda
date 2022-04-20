import s from "./Message.module.css";


const Message = (props) =>{
    return(
       <div className={s.messageWrapper}>
           <span className={s.message}>{props.text}</span>
        </div> 
    );
}

export default Message;
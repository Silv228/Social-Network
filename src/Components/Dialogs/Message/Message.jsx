import style from "./Message.module.css";
const Message = ({children, state}) => {
    return(
        <div className={`${style.message}  ${state === 'to'? style.to : style.from}`}>{children}</div>
    )
}

export default Message;
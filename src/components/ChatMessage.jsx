import { FaUser } from "react-icons/fa";

const ChatMessage = ({name, message}) => {
  return (
    <div className="p-3 flex items-center gap-2 shadow-md">
        <FaUser />
        <span className="font-semibold">{name}</span>
        <span className="font-medium ">{message}</span>
    </div>
  )
}

export default ChatMessage;
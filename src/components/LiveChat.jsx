import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatsSlice";
import { generateRandomName, makeRendomMessage } from "../utils/helper";


const LiveChat = () => {

    const dispatch = useDispatch();

     const chatMessages = useSelector((store) => store.chat.messages); 

    useEffect(() => {
        const i = setInterval(() => {

           console.log("Polling api ");

           dispatch(addMessage({
                name: generateRandomName(),
                message: makeRendomMessage(20),
           }))

        }, 500);
        return () => {
            clearInterval(i);
        }
    },[]);

  return (
    <div className="w-full h-[470px] ml-10 p-2 bg-slate-100 border border-black rounded-lg overflow-y-scroll flex flex-col-reverse">
       {
        chatMessages.map((c, i) => 
            <ChatMessage key={i} name={c.name} message={c.message} />
        )
       }
    </div>
  )
}

export default LiveChat;
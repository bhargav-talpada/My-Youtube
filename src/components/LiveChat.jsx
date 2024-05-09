import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatsSlice";
import { generateRandomName, makeRendomMessage } from "../utils/helper";


const LiveChat = () => {


    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();

     const chatMessages = useSelector((store) => store.chat.messages); 

    useEffect(() => {
        const i = setInterval(() => {

           dispatch(addMessage({
                name: generateRandomName(),
                message: makeRendomMessage(20),
           }))

        }, 1500);
        return () => {
            clearInterval(i);
        }
    },[]);

  return (
    <>
        <div className="w-full h-[470px] ml-8 p-2 bg-slate-100 border border-black rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
                {
                    chatMessages.map((c, i) => 
                        <ChatMessage key={i} name={c.name} message={c.message} />
                    )
                }
        </div>
        </div>
        
        <form onSubmit={(e) =>{
            e.preventDefault();
            dispatch(addMessage({
                name: "Bhargav",
                message: liveMessage,
            }));
        }} className="flex justify-around items-center ml-8 w-full rounded-lg p-2 border border-black">
            <input type="text" value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} placeholder="Enter Your Message" className="w-96 placeholder:text-black text-black py-2 px-3 border border-black rounded-md"/>
            <button className="py-2 px-4 bg-green-500 text-white rounded-md">Send</button>
        </form>
    </>
  )
}

export default LiveChat;
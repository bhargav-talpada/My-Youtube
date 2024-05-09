import { useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";

const LiveChart = () => {

  const dispatch = useDispatch();

  const chatMessages = useSelector(store => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("api pooling");
      dispatch(addMessage({
        name: "Bhargav Talpada",
        message: "I'm a Web Developer 🚀"
      }))
    }, 2000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="w-full h-[470px] ml-10 p-2 bg-slate-100 border border-black rounded-lg">
      {
        chatMessages.map((chats) => 
          <ChatMessage name="Bhargav Talpada" message="I'm a Web Developer" />
        )
      }
        
    </div>
  )
}

export default LiveChart;
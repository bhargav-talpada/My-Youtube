import { useEffect } from "react";
import ChatMessage from "./ChatMessage";  

const LiveChart = () => {

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Api pooling");
    }, 2000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="w-full h-[470px] ml-10 p-2 bg-slate-100 border border-black rounded-lg">
        <ChatMessage name="Bhargav Talpada" message="I'm a Web Developer" />
    </div>
  )
}

export default LiveChart;
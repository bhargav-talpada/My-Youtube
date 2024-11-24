import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex w-screen h-screen">
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Body;
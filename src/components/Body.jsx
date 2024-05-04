import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex justify-between">
        <Sidebar />
        <MainContainer />
    </div>
  )
}

export default Body;
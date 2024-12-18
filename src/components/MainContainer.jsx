import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

export const MainContainer = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return (
    <div className={` ${isMenuOpen ? 'w-screen h-screen' : 'w-screen h-screen'}`}>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}


export default MainContainer;
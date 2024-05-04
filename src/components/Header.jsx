import { FaBars, FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { YOUTUBE_LOGO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";

const Header = () => {

  const dispatch = useDispatch();

    const toggleMenuHandler = () => {
      dispatch(toggleMenu());
    };

  return (
    <div className="flex justify-between items-center p-4 m-2 shadow-lg">
        <div className="flex items-center">
            <FaBars className="text-3xl cursor-pointer" onClick={toggleMenuHandler} />
            <a href="/"> <img src={YOUTUBE_LOGO_URL} className="w-36 mx-2" alt="youtube logo" /> </a>
        </div>
        <div className=" flex justify-center items-center placeholder-black text-black text-xl">
            <input type="text" placeholder="Search..." className="w-[500px] border border-black py-2 px-5 rounded-l-full" />
            <button className="py-2 px-4 bg-gray-400 text-white text-3xl rounded-r-full" ><IoIosSearch  /></button>
        </div>
        <div className="">
            <FaUser className="text-2xl" /> 
        </div>
    </div>
  )
}

export default Header;
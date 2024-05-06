import { FaBars, FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { YOUTUBE_LOGO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";

const Header = () => {

  const dispatch = useDispatch();

    const toggleMenuHandler = () => {
      dispatch(toggleMenu());
    };

  return (
    <div className="flex justify-between items-center px-2 py-0 m-2">
        <div className="flex items-center gap-4">
            <FaBars className="text-2xl cursor-pointer" onClick={toggleMenuHandler} />
            <a href="/"> 
              <img src={YOUTUBE_LOGO_URL} className="w-28 mx-2" alt="youtube logo" />
            </a>
        </div>
        <div className=" flex justify-center items-center placeholder-black text-black text-xl">
            <input type="text" placeholder="Search" className="w-[500px] border border-black py-[2px] placeholder:text-[16px] px-5 rounded-l-full" />
            <button className="py-[5px] px-4 bg-gray-400 text-white rounded-r-full" ><IoIosSearch className="text-2xl"  /></button>
        </div>
        <div className="flex items-center gap-3">
            <BiVideoPlus className="text-4xl" />
            <IoMdNotificationsOutline className="text-4xl" />
            <FaUser className="text-2xl" /> 
        </div>
    </div>
  )
}

export default Header;
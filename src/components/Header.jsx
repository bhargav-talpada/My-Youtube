import { FaBars, FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { YOUTUBE_LOGO_URL, YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";
import { useEffect, useState } from "react";

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {

    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 2000);

    return () => {
      clearTimeout(timer);
    }

  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("api call", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
  };

  const dispatch = useDispatch();

    const toggleMenuHandler = () => {
      dispatch(toggleMenu());
    };

  return (
    <div className="flex justify-between items-center px-2 py-0 h-14 fixed top-0 w-full bg-white">
        <div className="flex items-center gap-4">
            <FaBars className="text-2xl cursor-pointer" onClick={toggleMenuHandler} />
            <a href="/"> 
              <img src={YOUTUBE_LOGO_URL} className="w-28 mx-2" alt="youtube logo" />
            </a>
        </div>
        <div className=" flex justify-center items-center placeholder-black text-black text-xl">
            <input type="text" value={searchQuery} onChange={((e) => setSearchQuery(e.target.value))}  placeholder="Search" className="w-[500px] border border-black py-[2px] placeholder:text-[16px] px-5 rounded-l-full" />
            <button className="py-[5px] px-4 bg-gray-400 text-white rounded-r-full" ><IoIosSearch className="text-2xl"  /></button>
        </div>
        <div className="flex items-center gap-3 mr-3">
            <BiVideoPlus className="text-4xl" />
            <IoMdNotificationsOutline className="text-4xl" />
            <FaUser className="text-2xl" /> 
        </div>
    </div>
  )
}

export default Header;
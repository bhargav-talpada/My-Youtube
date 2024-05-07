import { FaBars, FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { YOUTUBE_LOGO_URL, YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";
import { useEffect, useState } from "react";
import {cacheResults} from "../redux/searchSlice";

const Header = () => {

  const [searchQuery, setSearchQuery] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggetstions] = useState(false);

  const searchCache = useSelector(store => store.search);
  const dispatch = useDispatch();

  useEffect(() => {

    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    }

  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery] : json[1],
    }));

  };

    const toggleMenuHandler = () => {
      dispatch(toggleMenu());
    };

  return (
    <div className="flex justify-between items-center px-2 py-0 h-14 fixed top-0 w-full bg-white">
        <div className="flex items-center gap-4 px-3">
            <FaBars className="text-2xl cursor-pointer" onClick={toggleMenuHandler} />
            <a href="/"> 
              <img src={YOUTUBE_LOGO_URL} className="w-28" alt="youtube logo" />
            </a>
        </div>
        <div className="  ">
          <div className="flex justify-center items-center">
            <input type="text" value={searchQuery} onChange={((e) => setSearchQuery(e.target.value))} onFocus={() => setShowSuggetstions(true)} onBlur={() => setShowSuggetstions(false)} placeholder="Search" className="w-[500px] border border-gray-400 py-[2px] placeholder:text-[16px] px-5 rounded-l-full placeholder-black text-black text-xl" />
            <button className="py-[5px] px-4 bg-gray-400 text-white rounded-r-full" ><IoIosSearch className="text-2xl"  /></button>
          </div>
          {
            showSuggestions && <div className="fixed px-0 py-5 w-[500px] rounded-lg mt-[6px] bg-white shadow-lg border border-gray-400">
              <ul>
                {
                  suggestions.map((s) => 
                    <li key={s} className="py-1 px-5 font-semibold hover:bg-gray-200">{s}</li>
                  )
                }
              </ul>
            </div>
          }
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
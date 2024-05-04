import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiGreaterThan } from "react-icons/pi";
import { BiSolidUserAccount } from "react-icons/bi";
import { GoHistory } from "react-icons/go";
import { LuListVideo } from "react-icons/lu";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { useSelector } from "react-redux";

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // Early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-44">
      <div>
        <ul>
          <li className="flex gap-2 items-center py-2 text-lg cursor-pointer"><GoHome /> Home</li>
          <li className="flex gap-2 items-center py-2 text-lg cursor-pointer"><SiYoutubeshorts className="" /> Shorts</li>
          <li className="flex gap-2 items-center py-2 text-lg cursor-pointer"><MdOutlineSubscriptions /> Subscriptions</li>
        </ul>
      </div>
      <hr className="mt-5 border border-gray-300" />
      <div>
        <h1 className="flex gap-2 items-center text-xl font-bold py-3">You <PiGreaterThan /> </h1>
        <ul>
          <li className="flex gap-2 items-center py-2 text-lg cursor-pointer"><BiSolidUserAccount /> Your Channel</li>
          <li className="flex gap-2 items-center py-2 text-lg cursor-pointer"><GoHistory /> History</li>
          <li className="flex gap-2 items-center py-2 text-lg cursor-pointer"><LuListVideo/> Playlists</li>
          <li className="flex gap-2 items-center py-2 text-lg cursor-pointer"><GoVideo /> Your Videos</li>
          <li className="flex gap-2 items-center py-2 text-lg cursor-pointer"><MdOutlineWatchLater /> Watch Later</li>
          <li className="flex gap-2 items-center py-2 text-lg cursor-pointer"><AiOutlineLike /> Likes Video</li>
        </ul>
      </div>
      <hr className="mt-5 border border-gray-300" />
    </div>
  )
}

export default Sidebar;
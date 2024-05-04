import { GoHome } from "react-icons/go";
import { SiYoutubekids, SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiGreaterThan } from "react-icons/pi";
import { BiSolidUserAccount } from "react-icons/bi";
import { GoHistory } from "react-icons/go";
import { LuListVideo } from "react-icons/lu";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { useSelector } from "react-redux";
import { FaFireAlt } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgMusicNote } from "react-icons/cg";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { IoMdWifi } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { BsLightbulb } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
import { MdPodcasts } from "react-icons/md";
import { TiSocialYoutube } from "react-icons/ti";
import { LiaYoutubeSquare } from "react-icons/lia";
import { SiYoutubemusic } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { IoFlagOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiFeedbackLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // Early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-60 ">
      <div>
          <Link to="/"><h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><GoHome className="text-2xl" /> Home</h2></Link>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><SiYoutubeshorts className="text-2xl" /> Shorts</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><MdOutlineSubscriptions className="text-2xl" /> Subscriptions</h2>
      </div>
      <hr className="mt-5 border border-gray-300" />
      <div>
        <h1 className="flex gap-2 items-center text-xl font-bold py-3">You <PiGreaterThan className="text-2xl" /> </h1>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><BiSolidUserAccount className="text-2xl" /> Your Channel</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><GoHistory className="text-2xl" /> History</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><LuListVideo className="text-2xl" /> Playlists</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><GoVideo className="text-2xl" /> Your Videos</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><MdOutlineWatchLater className="text-2xl" /> Watch Later</h2>          
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><AiOutlineLike className="text-2xl" /> Likes Video</h2>
      </div>
      <hr className="mt-5 border border-gray-300" />
      <div>
        <h1 className="flex gap-2 items-center text-xl font-bold py-3">Explore </h1>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><FaFireAlt className="text-2xl" /> Trending</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><HiOutlineShoppingBag className="text-2xl" /> Shopping</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><CgMusicNote className="text-2xl" /> Music</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><PiFilmSlateDuotone className="text-2xl" /> Movies</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><IoMdWifi className="text-2xl" /> Live</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><SiYoutubegaming className="text-2xl" /> Gaming</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><IoNewspaperOutline className="text-2xl" /> News</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><CiTrophy className="text-2xl" /> Sports</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><BsLightbulb className="text-2xl" /> Courses</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><GiClothes className="text-2xl" /> Fashion & Beauty</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><MdPodcasts className="text-2xl" /> Podcasts</h2>
      </div>
      <hr className="mt-5 border border-gray-300" />
      <div>
        <h1 className="flex gap-2 items-center text-xl font-bold py-3">More from YouTube </h1>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><TiSocialYoutube className="text-red-600 text-2xl" /> YouTube Premium</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><LiaYoutubeSquare className="text-red-600 text-2xl" /> YouTube Studio</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><SiYoutubemusic className="text-red-600 text-2xl" /> YouTube Music</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><SiYoutubekids className="text-red-600 text-2xl" /> YouTube Kids</h2>
      </div>
      <hr className="mt-5 border border-gray-300" />
      <div>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><IoSettingsOutline className="text-2xl" /> Settings</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><IoFlagOutline className="text-2xl" />Report history</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><IoIosHelpCircleOutline className="text-2xl" /> Help</h2>
        <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer"><RiFeedbackLine YoutubekclassName="text-2xl" /> Send feedback</h2>
      </div>
      <hr className="mt-5 border border-gray-300" />
    </div>
  )
}

export default Sidebar;
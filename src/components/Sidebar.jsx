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
import { AiTwotoneCopyrightCircle } from "react-icons/ai";

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // Early return pattern
  if(!isMenuOpen) return null;

  return (
    <div>

    {/* Mobile view */}

      <div className="md:hidden px-1 py-5 hover:overflow-x-hidden overflow-y-scroll w-[30px] pt-14">
        <div>
            <Link to="/"><h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><GoHome className="text-xl" /> </h2></Link>
            <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><SiYoutubeshorts className="text-xl" /> </h2>
            <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><MdOutlineSubscriptions className="text-xl" /> </h2>
        </div>
        <hr className="mt-5 border border-gray-300" />
        <div>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><BiSolidUserAccount className="text-xl" /> </h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><GoHistory className="text-xl" /> </h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><LuListVideo className="text-xl" /></h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><GoVideo className="text-xl" /> </h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><MdOutlineWatchLater className="" /> </h2>          
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><AiOutlineLike className="text-xl" /> </h2>
        </div>
        <hr className="mt-5 border border-gray-300" />
        <div>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><FaFireAlt className="text-xl" /> </h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><HiOutlineShoppingBag className="text-xl" /> </h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><CgMusicNote className="text-xl" /> </h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><PiFilmSlateDuotone className="text-xl" /> </h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><IoMdWifi className="text-xl" /> </h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><SiYoutubegaming className="text-xl" /> </h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><IoNewspaperOutline className="text-xl" /> </h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><CiTrophy className="text-xl" /> </h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><BsLightbulb className="text-xl" /> </h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><GiClothes className="text-xl" />  </h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><MdPodcasts className="text-xl" /> </h2>
        </div>
        <hr className="mt-5 border border-gray-300" />
        <div>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><TiSocialYoutube className="text-red-600 text-xl" /></h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><LiaYoutubeSquare className="text-red-600 text-xl" /> </h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><SiYoutubemusic className="text-red-600 text-xl" /> </h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><SiYoutubekids className="text-red-600 text-xl" /> </h2>
        </div>
        <hr className="mt-5 border border-gray-300" />
        <div>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><IoSettingsOutline className="text-xl" /> </h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><IoFlagOutline className="text-xl" /></h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><IoIosHelpCircleOutline className="text-xl" /> </h2>
          <h2 className="flex gap-1 items-center py-2 text-base cursor-pointer px-1 hover:bg-gray-200 rounded-lg"><RiFeedbackLine YoutubekclassName="text-xl" /></h2>
        </div>
      </div>

    {/* Desktop view */}

      <div className="hidden md:block px-1 py-5 h-screen hover:overflow-x-hidden overflow-y-scroll w-[260px] pt-14">
        <div>
            <Link to="/"><h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><GoHome className="text-2xl" /> Home</h2></Link>
            <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><SiYoutubeshorts className="text-2xl" /> Shorts</h2>
            <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><MdOutlineSubscriptions className="text-2xl" /> Subscriptions</h2>
        </div>
        <hr className="mt-5 border border-gray-300" />
        <div>
          <h1 className="flex gap-2 items-center text-xl font-bold py-3 px-5">You <PiGreaterThan className="text-2xl" /> </h1>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><BiSolidUserAccount className="text-2xl" /> Your Channel</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><GoHistory className="text-2xl" /> History</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><LuListVideo className="text-2xl" /> Playlists</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><GoVideo className="text-2xl" /> Your Videos</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><MdOutlineWatchLater className="text-2xl" /> Watch Later</h2>          
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><AiOutlineLike className="text-2xl" /> Likes Video</h2>
        </div>
        <hr className="mt-5 border border-gray-300" />
        <div>
          <h1 className="flex gap-2 items-center text-xl font-bold py-2 px-5">Explore </h1>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><FaFireAlt className="text-2xl" /> Trending</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><HiOutlineShoppingBag className="text-2xl" /> Shopping</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><CgMusicNote className="text-2xl" /> Music</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><PiFilmSlateDuotone className="text-2xl" /> Movies</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><IoMdWifi className="text-2xl" /> Live</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><SiYoutubegaming className="text-2xl" /> Gaming</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><IoNewspaperOutline className="text-2xl" /> News</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><CiTrophy className="text-2xl" /> Sports</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><BsLightbulb className="text-2xl" /> Courses</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><GiClothes className="text-2xl" /> Fashion & Beauty</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><MdPodcasts className="text-2xl" /> Podcasts</h2>
        </div>
        <hr className="mt-5 border border-gray-300" />
        <div>
          <h1 className="flex gap-2 items-center text-xl font-bold py-2 px-5">More from YouTube </h1>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><TiSocialYoutube className="text-red-600 text-2xl" /> YouTube Premium</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><LiaYoutubeSquare className="text-red-600 text-2xl" /> YouTube Studio</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><SiYoutubemusic className="text-red-600 text-2xl" /> YouTube Music</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><SiYoutubekids className="text-red-600 text-2xl" /> YouTube Kids</h2>
        </div>
        <hr className="mt-5 border border-gray-300" />
        <div>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><IoSettingsOutline className="text-2xl" /> Settings</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><IoFlagOutline className="text-2xl" />Report history</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><IoIosHelpCircleOutline className="text-2xl" /> Help</h2>
          <h2 className="flex gap-4 items-center py-2 text-lg cursor-pointer px-4 hover:bg-gray-200 rounded-lg"><RiFeedbackLine YoutubekclassName="text-2xl" /> Send feedback</h2>
        </div>
        <hr className="mt-5 border border-gray-300" />
        <div className="pt-2">
          <div className="flex items-center gap-3 font-semibold">
            <h1 className="cursor-pointer">About</h1>
            <h1 className="cursor-pointer">Press</h1>
            <h1 className="cursor-pointer">Copyright</h1>
          </div>
          <div className="flex items-center  gap-3 font-semibold">
            <h1 className="cursor-pointer">Contact Us</h1>
            <h1 className="cursor-pointer">Creators</h1>
          </div>
          <div className="flex items-center  gap-3 font-semibold">
            <h1 className="cursor-pointer">Advertise</h1>
            <h1 className="cursor-pointer">Developers</h1>
          </div>
          <div className="flex items-center pt-3  gap-2 font-semibold">
            <h1 className="cursor-pointer">Terms</h1>
            <h1 className="cursor-pointer">Privacy</h1>
            <h1 className="cursor-pointer">Policy & Safety</h1>
          </div>
          <h1 className="font-semibold cursor-pointer">How Youtube Works</h1>
          <h1 className="font-semibold cursor-pointer">Test New Features</h1>
          <h1 className="pt-4 flex items-center"><AiTwotoneCopyrightCircle /> 2024 Googgle LLC</h1>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
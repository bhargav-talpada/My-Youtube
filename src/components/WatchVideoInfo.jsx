import useConvertDate from "../hooks/useConvertDate";
import useViewsCount from "../hooks/useViewsCount";
import ExpandeableParagrapgh from "./ExpandeableParagrapgh";
import { BiSolidBellRing } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import useGetLikesCount from "../hooks/useGetLikesCount";
import { PiShareFatThin } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { RxDotsHorizontal } from "react-icons/rx";

const WatchVideoInfo = ({vidoeInfo}) => {

    const {snippet, statistics} = vidoeInfo;
    
    const {channelTitle, title,description, publishedAt} = snippet;
    const {viewCount, likeCount} = statistics;

    const views = useViewsCount(viewCount);

    const likes = useGetLikesCount(likeCount);

    const fullDate = useConvertDate(publishedAt);

  return (
    <div className="">
        <h1 className="pt-5 text-2xl font-bold w-[95%]">{title}</h1>
        <div className="flex justify-between items-center">
          <h1 className="pl-7 text-xl font-semibold">{channelTitle}</h1>
          <div className="flex items-center gap-3">
            <button className="py-2 px-4 bg-black text-white text-[16px] rounded-full font-semibold">Join</button>
            <button className="flex py-2 px-4 items-center text-[16px] bg-gray-200 hover:bg-gray-300 text-black gap-1 rounded-full font-semibold"><BiSolidBellRing />Subscribed<IoIosArrowDown /></button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex">
              <button className="flex items-center text-[16px] py-2 px-4 bg-gray-200 hover:bg-gray-300 text-black gap-1 border rounded-l-full font-semibold"><AiOutlineLike className="text-xl" />  {likes}</button>
              <button className="flex items-center text-[16px] py-2 px-4 bg-gray-200 hover:bg-gray-300 text-black gap-1 border rounded-r-full font-semibold"><AiOutlineDislike className="text-xl" /></button>
            </div>
            <button className="flex items-center text-[16px] py-2 px-4 bg-gray-200 hover:bg-gray-300 text-black gap-1 rounded-full font-semibold"><PiShareFatThin /> Share</button>
            <button className="flex items-center text-[16px] py-2 px-4 bg-gray-200 hover:bg-gray-300 text-black gap-1 rounded-full font-semibold"><TfiDownload /> Download</button>
            <div>
              <button className="bg-gray-200 hover:bg-gray-300 text-[16px] rounded-full py-4 px-4 "><RxDotsHorizontal /></button>
              <div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 ml-7 mt-5 bg-gray-200 w-[800px]">
            <h1 className=" text-lg font-semibold">{views} Views • {fullDate}</h1>
            <ExpandeableParagrapgh text={description} maxLength={200} />
        </div>
    </div>
  )
}

export default WatchVideoInfo;
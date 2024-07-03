import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import useConvertDate from "../hooks/useConvertDate";


const CommentData = ({data}) => {

    var {snippet} = data;
    console.log(data);

    const {topLevelComment} = snippet;

    var {snippet} = topLevelComment;

    const {authorDisplayName, authorProfileImageUrl, publishedAt, textOriginal, likeCount} = snippet;

    const fullDate = useConvertDate(publishedAt);

  return (
    <div className="w-[825px] flex items-start gap-2 my-2 p-2 rounded-lg">
        <img src={authorProfileImageUrl} alt="authore profile img" className="w-11 rounded-full" />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="font-bold"> {authorDisplayName} </h1>
            <h2 className="text-sm">{fullDate}</h2>
          </div>
            <h1 className="w-[600px]"> {textOriginal} </h1>
            <div className="flex items-center">
              <button className="flex items-center text-xs py-2 px-2 hover:bg-gray-300 text-black gap-1 rounded-full font-semibold"><AiOutlineLike className="text-xl" />  {likeCount}</button>
              <button className="flex items-center text-xs py-2 px-2 hover:bg-gray-300 text-black gap-1 rounded-full font-semibold"><AiOutlineDislike className="text-xl" /></button>
            </div>
        </div>
    </div>

  )
};

export default CommentData;
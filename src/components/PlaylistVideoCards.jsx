import { useEffect, useState } from "react";
import useConvertDate from "../hooks/useConvertDate";

const PlaylistVideoCards = ({playlistCardInfo}) => {

    const [shortTitle, setShortTitle] = useState("");

    const {snippet} = playlistCardInfo;
    const {channelTitle, title, thumbnails, publishedAt} = snippet;
    
    const fullDate = useConvertDate(publishedAt);

    useEffect(() => {
      setShortTitle(ShortTitle(title, 48));
    });

    const ShortTitle = (input, length) => {
      if(input.length > length){
        return input.substring(0, length) + "...";
      }
      return input;
    };


  return (
    <div className="flex py-2 h-32">
        <div className="w-72">
            <img src={thumbnails.high.url} alt="thumnail" className="h-28  w-full rounded-lg" />
        </div>
        <div className="w-96 h-20 ml-2">
            <h1 className="font-bold text-lg">{shortTitle}</h1>
            <h1 className={shortTitle.length >= 32   ? "font-semibold text-gray-500" : "font-semibold text-gray-500 mt-5"}>{channelTitle}</h1>
            <h1 className="font-semibold text-gray-500"> {fullDate} </h1>
        </div>
    </div>
  )
}

export default PlaylistVideoCards;
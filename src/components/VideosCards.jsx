import { useSelector } from "react-redux";
import useViewsCount from "../hooks/useViewsCount";
import useConvertDate from "../hooks/useConvertDate";
import { useEffect } from "react";
import { YOUTUBE_PLAYLIST } from "../utils/constants";

const VideosCards = ({videoCardInfo}) => { 

  useEffect(() => {
    channelData();
  },[]);

  const channelData = async () => {
    const data = await fetch(YOUTUBE_PLAYLIST);
    const json = await data.json();
    console.log("playlist",json);
  };

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    const {snippet, statistics} = videoCardInfo;
    const {channelTitle, title, thumbnails, publishedAt} = snippet;
    const {viewCount} = statistics

    const views = useViewsCount(viewCount);     
    const fullDate = useConvertDate(publishedAt);
    

  return (
    <div className={`m-2 ${isMenuOpen ? 'w-[400px]' : 'w-[355px]' }  ml-5`}>
        <img src={thumbnails.medium.url} alt="thumnail" className="w-full rounded-lg" />
        <div>
            <h1 className="font-bold text-lg py-2">{title}</h1>
            <h1 className="font-semibold text-gray-500">{channelTitle}</h1>
            <h1 className="font-semibold text-gray-500">{views} Views • {fullDate} </h1>
        </div>
    </div>
  )
}

export default VideosCards;
import { useSelector } from "react-redux";
import useViewsCount from "../hooks/useViewsCount";
import useConvertDate from "../hooks/useConvertDate";

const VideosCards = ({videoCardInfo}) => { 

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    const {snippet, statistics} = videoCardInfo;
    const {channelTitle, title, thumbnails, publishedAt} = snippet;
    // const {channelId} = snippet;
    const {viewCount} = statistics

    const views = useViewsCount(viewCount);     
    const fullDate = useConvertDate(publishedAt);
    

  return (
    <div className={`${isMenuOpen ? 'w-[330px] md:w-[400px]' : 'w-[350px] md:w-[360px]' }  ml-4 my-2`}>
        <img src={thumbnails.medium.url} alt="thumnail" className="w-full rounded-lg hover:rounded-none" />
        <div>
            <h1 className="font-bold text-lg py-2">{title}</h1>
            <h1 className="font-semibold text-gray-500">{channelTitle}</h1>
            <h1 className="font-semibold text-gray-500">{views} Views • {fullDate} </h1>
        </div>
    </div>
  )
}

export default VideosCards;
import { useState } from "react";
import { useSelector } from "react-redux";

const VideosCards = ({videoCardInfo}) => { 

  const [views, setViews] = useState();

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    const {snippet, statistics} = videoCardInfo;
    const {channelTitle, title, thumbnails} = snippet;
    const {viewCount} = statistics

    const calculateViews = () => {
      if (viewCount >= 1000000) {
        return (viewCount / 1000000).toFixed(1) + 'm';
      } else if (viewCount >= 1000) {
        return (viewCount / 1000).toFixed(0) + 'k';
      } else {
        return viewCount.toString();
      }
      setViews(viewCount);
    }  
    calculateViews();  

  return (
    <div className={`m-2 ${isMenuOpen ? 'w-[390px]' : 'w-[350px]' }  ml-5`}>
        <img src={thumbnails.medium.url} alt="thumnail" className="w-full rounded-lg" />
        <div>
            <h1 className="font-bold text-lg py-2">{title}</h1>
            <h1>{channelTitle}</h1>
            <h1>{views} Views</h1>
        </div>
    </div>
  )
}

export default VideosCards;
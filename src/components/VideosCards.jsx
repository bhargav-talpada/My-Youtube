import { useSelector } from "react-redux";

const VideosCards = ({videoCardInfo}) => { 

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    const {snippet, statistics} = videoCardInfo;
    const {channelTitle, title, thumbnails} = snippet;

    

  return (
    <div className={`p-2 m-2 h-[400px] ${isMenuOpen ? 'w-[400px]' : 'w-[350px]' } shadow-xl ml-5`}>
        <img src={thumbnails.medium.url} alt="thumnail" className="w-full rounded-lg" />
        <div>
            <h1 className="font-bold text-lg py-2">{title}</h1>
            <h1>{channelTitle}</h1>
            <h1>{statistics.viewCount} Views</h1>
        </div>
    </div>
  )
}

export default VideosCards;
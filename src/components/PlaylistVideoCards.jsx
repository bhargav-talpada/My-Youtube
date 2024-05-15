import useConvertDate from "../hooks/useConvertDate";

const PlaylistVideoCards = ({playlistCardInfo}) => {

    const {snippet} = playlistCardInfo;
    const {channelTitle, title, thumbnails, publishedAt} = snippet;
    
    const fullDate = useConvertDate(publishedAt);


  return (
    <div className="flex py-2">
        <div className="w-72">
            <img src={thumbnails.high.url} alt="thumnail" className="h-28  w-full rounded-lg" />
        </div>
        <div className="w-96 h-28 ml-2">
            <h1 className="font-bold text-lg py-1">{title}</h1>
            <h1 className="font-semibold text-gray-500">{channelTitle}</h1>
            <h1 className="font-semibold text-gray-500"> {fullDate} </h1>
        </div>
    </div>
  )
}

export default PlaylistVideoCards;
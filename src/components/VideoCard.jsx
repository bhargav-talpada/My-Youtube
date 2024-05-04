
const VideoCard = ({info}) => {

    console.log("info",info);

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    const {viewCount} = statistics;
    
  return (
    <div className="p-2 m-2 w-72 shadow-xl">
        <img className="rounded-lg" src={thumbnails.medium.url} alt="video" /> 
        <div>
            <h1 className="font-bold ">{title}</h1>
            <h1>{channelTitle}</h1>
            <h1>{viewCount} </h1>
        </div>
    </div>
  )
}

export default VideoCard;
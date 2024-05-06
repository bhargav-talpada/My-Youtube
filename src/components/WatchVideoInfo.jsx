import useViewsCount from "../hooks/useViewsCount";

const WatchVideoInfo = ({vidoeInfo}) => {

    console.log(vidoeInfo);
    const {snippet, statistics} = vidoeInfo;
    
    const {channelTitle, title,description} = snippet;
    const {viewCount} = statistics

    const views = useViewsCount(viewCount);
    

  return (
    <div>
        <h1 className="pt-5 text-2xl font-bold w-[95%]">{title}</h1>
        <h1 className="pl-7 text-xl font-bold">{channelTitle}</h1>
        <div className="p-2 mt-5 bg-gray-500 w-[850px]">
            <h1 className="text-white text-lg font-semibold">{views} Views</h1>
            <p className="text-white text-lg font-semibold">{description}</p>
        </div>
    </div>
  )
}

export default WatchVideoInfo;
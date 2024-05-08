import useViewsCount from "../hooks/useViewsCount";
import ExpandeableParagrapgh from "./ExpandeableParagrapgh";

const WatchVideoInfo = ({vidoeInfo}) => {

    console.log(vidoeInfo);
    const {snippet, statistics} = vidoeInfo;
    
    const {channelTitle, title,description} = snippet;
    const {viewCount} = statistics

    const views = useViewsCount(viewCount);
    

  return (
    <div className="">
        <h1 className="pt-5 text-2xl font-bold w-[95%]">{title}</h1>
        <h1 className="pl-7 text-xl font-semibold">{channelTitle}</h1>
        <div className="p-2 ml-7 mt-5 bg-gray-200 w-[800px]">
            <h1 className=" text-lg font-semibold">{views} Views</h1>
            <ExpandeableParagrapgh text={description} maxLength={200} />
        </div>
    </div>
  )
}

export default WatchVideoInfo;
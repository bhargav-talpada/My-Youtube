
const WatchVideoInfo = ({vidoeInfo}) => {

    console.log(vidoeInfo);
    const {snippet} = vidoeInfo;
    
    const {channelTitle, title,description} = snippet;
    

  return (
    <div>
        <h1 className="pt-5 text-2xl font-bold w-[95%]">{title}</h1>
        <h1 className="pl-7 text-xl font-bold">{channelTitle}</h1>
        <div className="p-2 mt-5 bg-gray-500 w-[850px]">
            <p className="text-white font">{description}</p>
        </div>
    </div>
  )
}

export default WatchVideoInfo;
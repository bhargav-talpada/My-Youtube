
const WatchVideoInfo = ({vidoeInfo}) => {

    const {snippet} = vidoeInfo;
    
    const {channelTitle, title} = snippet;
    

  return (
    <div>
        <h1>{channelTitle}</h1>
        <h1>{title}</h1>
    </div>
  )
}

export default WatchVideoInfo;
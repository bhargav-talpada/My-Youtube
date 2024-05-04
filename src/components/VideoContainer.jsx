import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideosCards from "./VideosCards";

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap mt-5">
      {
        videos.map((video) => 
          <VideosCards key={video.id} videoCardInfo={video} />
        )
      }
    </div>
  )
}

export default VideoContainer;
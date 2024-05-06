import useGetVideos from "../hooks/useGetVideos";
import VideosCards from "./VideosCards";
import { Link } from "react-router-dom";

const VideoContainer = () => {

  const videos = useGetVideos();

  return (
    <div className="flex flex-wrap pt-0">
      {
        videos.map((video) => 
          <Link  key={video.id} to={"/watch?v=" + video.id}>
            <VideosCards  videoCardInfo={video} />
          </Link>
        )
      }
    </div>
  )
}

export default VideoContainer;
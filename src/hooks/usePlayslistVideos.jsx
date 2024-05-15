import { useEffect, useState } from "react";
import { YOUTUBE_PLAYLIST } from "../utils/constants";

const usePlaylistVideos = () => {

  const [playlistVideo, setPlaylistVideo] = useState([]);

    useEffect(() => {
        watchpagePlaylistVideo();
      },[]);
    
      const watchpagePlaylistVideo = async () => {
        const data = await fetch(YOUTUBE_PLAYLIST);
        const json = await data.json();
        console.log("playlist",json);
        setPlaylistVideo(json.items)
      };

      return playlistVideo;
}

export default usePlaylistVideos;
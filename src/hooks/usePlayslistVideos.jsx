import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import useGetVideos from "./useGetVideos";

const usePlaylistVideos = () => {

  const [playlistVideo, setPlaylistVideo] = useState([]);

  const [params] = useSearchParams();
  
  const videos = useGetVideos();

    const filterVideo = videos.filter((vidoeId) => vidoeId.id === params.get("v"));
    console.log("play id final", filterVideo[0]?.snippet);
  
    const cId = filterVideo?.[0]?.snippet?.channelId;
    console.log("cid",cId);

    useEffect(() => {
        watchpagePlaylistVideo();
      },[]);
    
      const watchpagePlaylistVideo = async () => {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2C%20contentDetails&channelId=UCjBwQ6M9QyCgO5Pp-TQRFUA&maxResults=50&key=" + GOOGLE_API_KEY);
        const json = await data.json();
        console.log("playlist",json);
        setPlaylistVideo(json.items)
      };

      return playlistVideo;
}

export default usePlaylistVideos;